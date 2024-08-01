import React from 'react';

function FileUploadInput({label , multiple}) {
  return (
    <div className="">
      <label className="block mb-2  mt-3 text-sm font-vazirmatn font-normal text-gray-900" htmlFor="user_avatar">{label}</label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
        multiple={multiple}
      />
    </div>
  );
}

export default FileUploadInput;