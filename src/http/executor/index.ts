// HTTP Executor for API requests

interface ExecutorOptions {
  headers?: Record<string, string>;
  data?: any;
}

class RequestExecutor {
  private method: string;
  private url: string;
  private options: ExecutorOptions;
  private abortController: AbortController;

  constructor(method: string, url: string, options: ExecutorOptions = {}) {
    this.method = method;
    this.url = url;
    this.options = options;
    this.abortController = new AbortController();
  }

  async execute() {
    const fetchOptions: RequestInit = {
      method: this.method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
        ...this.options.headers,
      },
      signal: this.abortController.signal,
    };

    if (this.options.data && ['POST', 'PUT', 'PATCH'].includes(this.method.toUpperCase())) {
      fetchOptions.body = JSON.stringify(this.options.data);
    }

    try {
      const response = await fetch(this.url, fetchOptions);
      
      if (!response.ok) {
        const error: any = new Error(`HTTP Error: ${response.status}`);
        error.response = {
          status: response.status,
          statusText: response.statusText,
          data: await response.json().catch(() => ({})),
        };
        throw error;
      }

      return await response.json();
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw new Error('Request was cancelled');
      }
      throw error;
    }
  }

  cancel() {
    this.abortController.abort();
  }
}

export function executor(method: string, url: string, options: ExecutorOptions = {}) {
  return new RequestExecutor(method, url, options);
} 