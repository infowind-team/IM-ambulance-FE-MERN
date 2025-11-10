// app/hr/HRConfigurationTab.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Building, Briefcase, UserCheck, Calculator, Pencil, Check, X, Plus, Upload, Image } from 'lucide-react';

interface Row {
  id: string;
  [key: string]: any;
}

interface TableConfig {
  title: string;
  icon: React.ReactNode;
  columns: { key: string; header: string; type?: 'text' | 'number' | 'textarea' | 'image' }[];
  data: Row[];
}

export default function HRConfigurationTab() {
  const [tables, setTables] = useState<TableConfig[]>([
    // === Companies ===
    {
      title: 'Companies',
      icon: <Building className="w-5 h-5" />,
      columns: [
        { key: 'logo', header: 'Logo', type: 'image' },
        { key: 'name', header: 'Company Name' },
        { key: 'code', header: 'Code/Prefix' },
        { key: 'address', header: 'Address', type: 'textarea' },
        { key: 'phone', header: 'Phone' },
        { key: 'email', header: 'Email' },
        { key: 'user', header: 'User' },
        { key: 'lastModified', header: 'Last Modified' },
      ],
      data: [
        {
          id: 'c1',
          logo: '',
          name: 'IM Ambulance',
          code: 'IM',
          address: '123 Medical Drive, Singapore 123456',
          phone: '+65 6123 4567',
          email: 'contact@imambulance.com',
          user: 'Admin',
          lastModified: '2024-12-10',
        },
        {
          id: 'c2',
          logo: '',
          name: '1 M/S',
          code: '1MS',
          address: '-',
          phone: '',
          email: '',
          user: 'HR Manager',
          lastModified: '2024-12-09',
        },
      ],
    },

    // === Departments ===
    {
      title: 'Departments',
      icon: <Briefcase className="w-5 h-5" />,
      columns: [
        { key: 'name', header: 'Name' },
        { key: 'description', header: 'Description' },
        { key: 'lastEditor', header: 'Last Editor' },
        { key: 'lastModified', header: 'Last Modified' },
      ],
      data: [
        {
          id: 'd1',
          name: 'Ground Crew (Shift)',
          description: 'Ground Crew (Shift)',
          lastEditor: 'Admin',
          lastModified: '2024-12-10',
        },
        {
          id: 'd2',
          name: 'Ground Crew (Office Hours)',
          description: 'Ground Crew (Office Hours)',
          lastEditor: 'HR Manager',
          lastModified: '2024-12-09',
        },
        {
          id: 'd3',
          name: 'Operations',
          description: 'Operations',
          lastEditor: 'Admin',
          lastModified: '2024-12-05',
        },
      ],
    },

    // === Roles ===
    {
      title: 'Roles',
      icon: <UserCheck className="w-5 h-5" />,
      columns: [
        { key: 'name', header: 'Name' },
        { key: 'description', header: 'Description' },
        { key: 'lastEditor', header: 'Last Editor' },
        { key: 'lastModified', header: 'Last Modified' },
      ],
      data: [
        { id: 'r1', name: 'MTO', description: 'MTO', lastEditor: 'Admin', lastModified: '2024-12-10' },
        { id: 'r2', name: 'EMT', description: 'EMT', lastEditor: 'HR Manager', lastModified: '2024-12-09' },
        { id: 'r3', name: 'Medic', description: 'Medic', lastEditor: 'Admin', lastModified: '2024-12-08' },
        { id: 'r4', name: 'Operations', description: 'Operations', lastEditor: 'Admin', lastModified: '2024-12-08' },
      ],
    },

    // === CPF Contributions ===
    {
      title: 'CPF Contributions',
      icon: <Calculator className="w-5 h-5" />,
      columns: [
        { key: 'ageGroup', header: 'Age Group' },
        { key: 'employeeRate', header: 'Employee Rate (%)', type: 'number' },
        { key: 'employerRate', header: 'Employer Rate (%)', type: 'number' },
        { key: 'lastEditor', header: 'Last Editor' },
        { key: 'lastModified', header: 'Last Modified' },
      ],
      data: [
        {
          id: 'cpf1',
          ageGroup: 'Below 35',
          employeeRate: 20,
          employerRate: 17,
          lastEditor: 'Admin',
          lastModified: '2024-12-10',
        },
        {
          id: 'cpf2',
          ageGroup: '35-45',
          employeeRate: 20,
          employerRate: 17,
          lastEditor: 'HR Manager',
          lastModified: '2024-12-09',
        },
      ],
    },
  ]);

  const [editing, setEditing] = useState<{ tableIndex: number; rowId: string } | null>(null);
  const [editValues, setEditValues] = useState<Partial<Row>>({});

  const handleEdit = (tableIndex: number, rowId: string) => {
    const row = tables[tableIndex].data.find((r) => r.id === rowId);
    if (row) {
      setEditValues(row);
      setEditing({ tableIndex, rowId });
    }
  };

  const handleSave = () => {
    if (!editing) return;
    const { tableIndex, rowId } = editing;
    setTables((prev) =>
      prev.map((table, i) =>
        i === tableIndex
          ? {
              ...table,
              data: table.data.map((row) =>
                row.id === rowId ? { ...row, ...editValues } : row
              ),
            }
          : table
      )
    );
    setEditing(null);
    setEditValues({});
  };

  const handleCancel = () => {
    setEditing(null);
    setEditValues({});
  };

  const handleInputChange = (key: string, value: any) => {
    setEditValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddRow = (tableIndex: number) => {
    const table = tables[tableIndex];
    const newRow: Row = {
      id: `new-${Date.now()}`,
      ...table.columns.reduce((acc, col) => {
        const defaultValue =
          col.type === 'number' ? 0 : col.key === 'lastModified' ? '2025-11-06' : col.key === 'lastEditor' || col.key === 'user' ? 'Current User' : '';
        return { ...acc, [col.key]: defaultValue };
      }, {}),
    };

    setTables((prev) =>
      prev.map((t, i) =>
        i === tableIndex
          ? { ...t, data: [...t.data, newRow] }
          : t
      )
    );
  };

  return (
    <div className="space-y-6">
      {tables.map((table, tableIndex) => {
        const isEditingThisTable = editing?.tableIndex === tableIndex;

        return (
          <div
            key={table.title}
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border"
          >
            {/* Header */}
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
              <div className="flex items-center justify-between">
                <h4 className="leading-none flex items-center gap-2 text-base font-medium">
                  {table.icon} {table.title}
                </h4>
                <Button
                  onClick={() => handleAddRow(tableIndex)}
                  className="bg-[#2160AD] hover:bg-[#1d5497] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add {table.title.slice(0, -1)}
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="px-6 pb-6">
              <Table>
                <TableHeader className="header-bg-soft">
                  <TableRow>
                    {table.columns.map((col) => (
                      <TableHead
                        key={col.key}
                        className="text-gray-700 font-semibold px-4 py-3"
                      >
                        {col.header}
                      </TableHead>
                    ))}
                    <TableHead className="text-gray-700 font-semibold px-4 py-3 w-20">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {table.data.map((row) => {
                    const isEditing = isEditingThisTable && editing.rowId === row.id;
                    const isNew = row.id.startsWith('new-');

                    return (
                      <TableRow
                        key={row.id}
                        className="hover:header-bg-soft transition"
                      >
                        {table.columns.map((col) => (
                          <TableCell
                            key={col.key}
                            className="py-4 align-middle whitespace-nowrap"
                          >
                              {col.type === 'image' && !isEditing ? (
                                <div className="flex items-center gap-2">
                                  <div className="w-12 h-12 flex items-center justify-center border rounded header-bg-soft">
                                    <Image className="w-6 h-6 text-gray-400" />
                                  </div>
                                  {isNew && (
                                    <label className="cursor-pointer">
                                      <input type="file" accept="image/*" className="hidden" />
                                      <Upload className="w-4 h-4 text-[#2160AD]" />
                                    </label>
                                  )}
                                </div>
                              ) : isEditing ? (
                                col.type === 'textarea' ? (
                                  <Textarea
                                    value={editValues[col.key] ?? ''}
                                    onChange={(e) =>
                                      handleInputChange(col.key, e.target.value)
                                    }
                                    className="min-h-[60px] text-base"
                                    rows={2}
                                  />
                                ) : col.type === 'number' ? (
                                  <Input
                                    type="number"
                                    value={editValues[col.key] ?? ''}
                                    onChange={(e) =>
                                      handleInputChange(col.key, Number(e.target.value))
                                    }
                                    className="text-base"
                                  />
                                ) : (
                                  <Input
                                    value={editValues[col.key] ?? ''}
                                    onChange={(e) =>
                                      handleInputChange(col.key, e.target.value)
                                    }
                                    className="text-base"
                                  />
                                )
                              ) : (
                                <span className="text-base">
                                  {row[col.key] === '' || row[col.key] == null ? '-' : row[col.key]}
                                </span>
                              )}
                            </TableCell>
                          ))}
                          <TableCell className="py-4 align-middle whitespace-nowrap">
                            {isEditing ? (
                              <div className="flex items-center gap-2">
                                <Button size="icon" variant="ghost" onClick={handleSave}>
                                  <Check className="h-4 w-4 text-green-600" />
                                </Button>
                                <Button size="icon" variant="ghost" onClick={handleCancel}>
                                  <X className="h-4 w-4 text-red-600" />
                                </Button>
                              </div>
                            ) : (
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => handleEdit(tableIndex, row.id)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
            </div>
          </div>
        );
      })}
    </div>
  );
}