interface IProps {
  title: string;
  description?: string;
}

const AdminPageTitle: React.FC<IProps> = ({ title, description }) => {
  return (
    <section className="text-white mb-8">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 sm:mb-5">
        {title}
      </h1>
      {description && (
        <h2 className="font-normal text-sm sm:text-base opacity-80">
          {description}
        </h2>
      )}
    </section>
  );
};

export default AdminPageTitle;
