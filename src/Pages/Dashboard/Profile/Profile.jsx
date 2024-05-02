const Profile = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Profile</h1>
      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow">
        <div className="relative z-20 h-35 md:h-65">
          <img src="https://i.ibb.co/XZxfx6H/gitbanner.png" alt="" />
          <div className="absolute bottom-1 right-1 z-10 ">
            <label
              htmlFor=""
              className="flex cursor-pointer items-center justify-center gap-2 rounded bg-black px-2 py-1 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
            >
              <input type="file" id="cover" name="cover" className=""></input>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
