import React from "react";
import { useDispatch, useSelector } from "react-redux";

const UserDetails = () => {
  const dispatch = useDispatch();
  const selfUserDetails = useSelector(
    (globalState) => globalState.user.selfUser
  );

  return (
    <>
      <div className="my-4 max-w-screen-md w-3/4 border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
          <div className="shrink-0 mr-auto sm:py-3 w-full">
            <p className="font-medium text-3xl text-center">Account Details</p>
          </div>
        </div>

        <div className="flow-root mt-4">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 place-items-center gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Full Name</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {selfUserDetails ? selfUserDetails.fullname : "loading..."}
              </dd>
            </div>

            <div className="grid grid-cols-1 place-items-center gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Email</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {selfUserDetails ? selfUserDetails.email : "loading..."}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
