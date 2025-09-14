import * as Icon from 'react-bootstrap-icons';

export default function UserDetailCard({ title, data, className }) {
  return (
    <div className={`shadow border border-neutral-300 rounded-lg p-4 ${className}`}>
      <div className="flex items-center mb-4 ">
        <div className="bg-blue-100 p-2 rounded-lg">
          <Icon.Person className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="ml-3 text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">{data[0].label}</p>
          <p className="font-medium text-gray-900">{data[0].value}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">{data[1].label}</p>
          <p className="font-medium text-gray-900">{data[1].value}</p>
        </div>
      </div>
    </div>
  );
}
