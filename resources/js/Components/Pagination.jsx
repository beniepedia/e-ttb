import { Link } from "@inertiajs/react";

export default function Pagination({ links = [] }) {
    // Jika hanya ada 3 link (prev, current, next tanpa halaman lain), tidak perlu tampilkan
    if (links.length === 3) return null;

    return (
        <div className="join mt-4 flex flex-wrap justify-center">
            {links.map((link, index) => {
                if (link.url === null) {
                    return (
                        <button
                            key={index}
                            className="join-item btn btn-disabled"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    );
                }

                return (
                    <Link
                        key={index}
                        href={link.url}
                        className={`join-item btn ${
                            link.active ? "btn-active" : ""
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                );
            })}
        </div>
    );
}
