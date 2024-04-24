/* eslint-disable react/prop-types */

function ProductionCompanies({ details }) {
  const modifierFunctionProduction = (HouseList) =>
    HouseList.map((company) => {
      return {
        id: company.id,
        logoPath: company.logo_path,
        name: company.name,
        originCountry: company.origin_country,
      };
    });

  const modifiedProductionCompany = modifierFunctionProduction(details);
  console.log(modifiedProductionCompany);
  return (
    <div className="flex gap-4 items-center flex-wrap pt-5">
      {modifiedProductionCompany.map((item) => {
        if (item.logoPath !== null) {
          return (
            <div key={item.id} className=" bg-[#AEBBC9]">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.logoPath}`}
                className="h-8 w-auto object-contain p-1"
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default ProductionCompanies;
