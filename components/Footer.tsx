export const Footer = () => {
  return (
    <footer className="w-full border-t bg-white dark:bg-black text-center py-4">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}
        <span className="pl-2">Prajwal Dahat</span>
      </div>
    </footer>
  );
};
