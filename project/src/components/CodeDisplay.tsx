import React from 'react';
import { Copy } from 'lucide-react';
import { CodeDisplayProps } from '../types';

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, language }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900 text-gray-100">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800">
        <span className="text-sm font-mono">{language}</span>
        <button
          onClick={copyToClipboard}
          className="p-1 hover:bg-gray-700 rounded transition-colors"
          title="Copy code"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm">{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;