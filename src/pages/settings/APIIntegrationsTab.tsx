// components/settings/APIIntegrationsTab.tsx
"use client";

import { useState } from "react";
import { Key, Eye, EyeOff, Copy } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Fallback toast implementation for environments where '@/components/ui/use-toast' is not available.
const toast = (payload: { title: string; description?: string }) => {
  // If the app provides a global toast handler, prefer that.
  if (typeof window !== "undefined" && (window as any).toast) {
    (window as any).toast(payload);
    return;
  }

  // Lightweight non-blocking fallback: log to console.
  console.info(
    payload.title + (payload.description ? `: ${payload.description}` : "")
  );
};

interface IntegrationProps {
  title: string;
  apiKeyId: string;
  secretKeyId: string;
  apiKeyPlaceholder: string;
  secretKeyPlaceholder: string;
}

const IntegrationCard = ({
  title,
  apiKeyId,
  secretKeyId,
  apiKeyPlaceholder,
  secretKeyPlaceholder,
}: IntegrationProps) => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Key className="w-5 h-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* API Key */}
        <div className="space-y-2">
          <Label htmlFor={apiKeyId}>API Key</Label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input
                id={apiKeyId}
                type={showApiKey ? "text" : "password"}
                placeholder={apiKeyPlaceholder}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8"
              onClick={() => copyToClipboard(apiKey, "API Key")}
              disabled={!apiKey}
            >
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </Button>
          </div>
        </div>

        {/* Secret Key */}
        <div className="space-y-2">
          <Label htmlFor={secretKeyId}>Secret Key</Label>
          <Input
            id={secretKeyId}
            type="password"
            placeholder={secretKeyPlaceholder}
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default function APIIntegrationsTab() {
  return (
    <div className="space-y-6">
      <IntegrationCard
        title="QuickBooks Integration"
        apiKeyId="qb-api-key"
        secretKeyId="qb-secret-key"
        apiKeyPlaceholder="Enter QuickBooks API key"
        secretKeyPlaceholder="Enter QuickBooks secret key"
      />

      <IntegrationCard
        title="Cartrack Integration"
        apiKeyId="ct-api-key"
        secretKeyId="ct-secret-key"
        apiKeyPlaceholder="Enter Cartrack API key"
        secretKeyPlaceholder="Enter Cartrack secret key"
      />

      <IntegrationCard
        title="Fingerprint Integration"
        apiKeyId="fp-api-key"
        secretKeyId="fp-secret-key"
        apiKeyPlaceholder="Enter Fingerprint API key"
        secretKeyPlaceholder="Enter Fingerprint secret key"
      />
    </div>
  );
}
