const Header = ({ children }) => {
    return (
        <div className="shadow p-4 mb-6 dark:bg-slate-600">
            <h2 className="font-semibold text-slate-600 dark:text-slate-300">
                {children}
            </h2>
        </div>
    );
};

export default Header;
