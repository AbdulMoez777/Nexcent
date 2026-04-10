import React from "react";

function Community() {
  return (
    <>
      <div className="w-full py-16 px-8 text-center bg-white">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-d-grey mb-5">
            Manage your entire community <br />
            in a single system
          </h2>
          <p className="text-grey text-lg">Who is Nexcent suitable for?</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Card1  */}
          <div className="flex flex-col items-center px-6 py-8 bg-white rounded-lg shadow-sm border border-gray-100 md:w-1/3">
            <img
              src="public\Images\Icon1.png"
              alt="Membership"
              className="h-14 mb-4"
            />
            <h3 className="text-3xl font-bold text-d-grey mb-3">
              Membership <br /> Organisations
            </h3>
            <p className="text-grey text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          {/* Card2  */}
          <div className="flex flex-col items-center px-6 py-8 bg-white rounded-lg shadow-sm border border-gray-100 md:w-1/3">
            <img
              src="public\Images\Icon2.png"
              alt="Membership"
              className="h-14 mb-4"
            />
            <h3 className="text-3xl font-bold text-d-grey mb-3">
              Membership <br /> Organisations
            </h3>
            <p className="text-grey text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          {/* Card3  */}
          <div className="flex flex-col items-center px-6 py-8 bg-white rounded-lg shadow-sm border border-gray-100 md:w-1/3">
            <img
              src="public\Images\Icon3.png"
              alt="Membership"
              className="h-14 mb-4"
            />
            <h3 className="text-3xl font-bold text-d-grey mb-3">
              Membership <br /> Organisations
            </h3>
            <p className="text-grey text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
