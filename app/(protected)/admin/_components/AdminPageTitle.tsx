interface IProps {
  title: string;
  description?: string;
}

const AdminPageTitle: React.FC<IProps> = ({ title, description }) => {
  return (
    <section className="text-white mb-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-5">
        {title}
      </h1>
      {description && (
        <h2 className="font-normal sm:text-base opacity-80">{description}</h2>
      )}
    </section>
  );
};

export default AdminPageTitle;
