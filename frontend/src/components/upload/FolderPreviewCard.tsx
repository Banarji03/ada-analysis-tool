import React, { useState } from 'react';
import { FolderOpen, ChevronDown, ChevronRight, FileCode, X } from 'lucide-react';
import { AdaFolder } from '../../types/file.types';
import { useFileStore } from '../../store/useFileStore';
import { Badge } from '../shared/Badge';

interface FolderPreviewCardProps {
  folder: AdaFolder;
  index: number;
}

export const FolderPreviewCard: React.FC<FolderPreviewCardProps> = ({ folder, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { files, removeFolder } = useFileStore();

  const folderFiles = files.filter((f) => f.folderId === folder.id);
  const specCount = folderFiles.filter((f) => f.type === 'spec').length;
  const bodyCount = folderFiles.filter((f) => f.type === 'body').length;
  const isLarge = folderFiles.length > 30;

  return (
    <div
      className="slide-up rounded-lg border border-slate-700/50 hover:border-zinc-600 transition-all overflow-hidden"
      style={{ background: 'rgba(30,30,36,0.7)', animationDelay: `${index * 50}ms` }}
    >
      {/* Header row */}
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-2 flex-1 min-w-0 text-left"
        >
          <div className="p-1.5 rounded bg-cyan-500/10 flex-shrink-0">
            <FolderOpen size={15} className="text-cyan-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-slate-200 text-sm font-mono truncate">{folder.name}</p>
            <p className="text-slate-500 text-xs mt-0.5">
              {folderFiles.length} Ada files
              {isLarge && (
                <span className="ml-1.5 text-cyan-500/80">⚠ large folder</span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {specCount > 0 && <Badge variant="primary">{specCount} spec</Badge>}
            {bodyCount > 0 && <Badge variant="secondary">{bodyCount} body</Badge>}
            {expanded ? (
              <ChevronDown size={13} className="text-slate-500 ml-1" />
            ) : (
              <ChevronRight size={13} className="text-slate-500 ml-1" />
            )}
          </div>
        </button>

        <button
          onClick={() => removeFolder(folder.id)}
          title="Remove folder"
          className="p-1.5 rounded text-slate-600 hover:text-red-400 hover:bg-red-500/10 transition-colors flex-shrink-0"
        >
          <X size={13} />
        </button>
      </div>

      {/* Expanded file list */}
      <div
        className="accordion-content border-t"
        style={{
          maxHeight: expanded ? `${Math.min(folderFiles.length * 36 + 8, 320)}px` : '0',
          opacity: expanded ? 1 : 0,
          borderColor: 'var(--border-default)',
        }}
      >
        <div className="overflow-y-auto" style={{ maxHeight: 320 }}>
          {folderFiles.map((file) => (
            <div
              key={file.id}
              className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800/40 transition-colors"
            >
              <FileCode size={12} className={file.type === 'spec' ? 'text-cyan-500/70' : 'text-orange-500/70'} />
              <span className="flex-1 text-xs font-mono text-slate-400 truncate">
                {file.relativePath ?? file.name}
              </span>
              <Badge variant={file.type === 'spec' ? 'primary' : 'secondary'}>
                {file.type === 'spec' ? 'SPEC' : 'BODY'}
              </Badge>
            </div>
          ))}
        </div>
        {folderFiles.length > 30 && (
          <p className="px-4 py-2 text-[10px] font-mono text-slate-600 border-t" style={{ borderColor: 'var(--border-default)' }}>
            {folderFiles.length} files total · scroll to see all
          </p>
        )}
      </div>
    </div>
  );
};
