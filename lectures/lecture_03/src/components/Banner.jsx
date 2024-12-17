export const Banner = ({ img, title, description }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
