function BannerCard({
  children,
  description,
  bgColor,
  textColor,
  width,
  mb = 0,
}) {
  return (
    <div
      style={{ backgroundColor: bgColor, width: width }}
      className="rounded-3xl py-6 px-8 shadow-lg"
    >
      {children}
      <p
        style={{ color: textColor, marginBottom: mb }}
        className="mt-3 leading-[1.4rem] font-medium"
      >
        {description}
      </p>
    </div>
  );
}

export default BannerCard;
