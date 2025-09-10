import { Link } from '@inertiajs/react';

export default function Breadcumb({ data = [] }) {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {data.map((d, i) => (
          <li key={i}>
            <Link
              href={d.url}
              className={i === data.length - 1 ? 'pointer-events-none text-neutral-400' : ''}
            >
              {d.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
