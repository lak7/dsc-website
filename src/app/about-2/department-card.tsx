interface DepartmentCardProps {
  title: string;
  description: string;
  memberCount: number;
  color: string;
  icon: React.ReactNode;
}

export function DepartmentCard({
  title,
  description,
  memberCount,
  color,
  icon,
}: DepartmentCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-gray-800 bg-black/50 p-6 transition-all hover:scale-[1.02] hover:border-gray-700 cursor-pointer"
      style={{
        boxShadow: `0 0 20px ${color}25`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-transparent" />
      <div
        className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
        style={{
          background: `linear-gradient(135deg, ${color}, transparent)`,
        }}
      />
      <div className="relative z-10 space-y-4">
        <div
          className="inline-flex items-center justify-center rounded-full p-2"
          style={{
            background: `linear-gradient(135deg, ${color}40, transparent)`,
            border: `1px solid ${color}30`,
          }}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-100 mb-1">{title}</h3>
          <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium text-gray-400">{memberCount}</span>
          <span className="ml-1">Team Members</span>
        </div>
      </div>
    </div>
  );
}
