/* eslint-disable react/prop-types */
function TvProviders({ providers }) {
  if (providers) {
    return (
      <div className="flex gap-4 items-center flex-wrap pt-5">
        {providers.map((item) => {
          if (item.logoPath !== null) {
            return (
              <div key={item.providerId}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.logoPath}`}
                  className="h-10 w-auto object-contain p-1"
                />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h2>This show is not available in India</h2>
      </div>
    );
  }
}

export default TvProviders;
