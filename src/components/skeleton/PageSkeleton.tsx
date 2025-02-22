import { Skeleton, Typography } from "@mui/material";

const PageSkeleton = () => {
  return (
    <div className="w-[40%] bg-white rounded-2xl p-2 min-h-screen">
      {/* Image section */}
      <div className="h-80">
        <div className="grid grid-cols-3 grid-rows-4 gap-3 h-full w-full">
          <div className="row-span-4 col-span-2">
            <Skeleton animation="wave" variant="rounded" height={"100%"} />
          </div>
          <div className="row-span-2 col-span-1">
            <Skeleton animation="wave" variant="rounded" height={"100%"} />
          </div>
          <div className="row-span-2 col-span-1">
            <Skeleton animation="wave" variant="rounded" height={"100%"} />
          </div>
        </div>
      </div>

      {/* Details section */}
      {/* Title section */}
      <div className="my-5 px-2 flex justify-between items-end">
        <div>
          <Typography variant="h6">
            <span className="font-semibold"></span>
          </Typography>
          <Typography variant="body2">
            <span className="flex gap-2 font-medium text-gray-600"></span>
          </Typography>
        </div>
        <div className="pr-3">
          <Typography variant="h6">
            <span className="font-semibold">
              <span className="text-gray-500">
                <sub></sub>
              </span>
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
