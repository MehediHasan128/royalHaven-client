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
        <div className="w-[60%]">
          <Typography variant="h6">
            <span className="font-semibold">
              <Skeleton animation="wave" variant="text" height={"100%"} />
            </span>
          </Typography>
          <Typography variant="body2">
            <span className="flex gap-2 font-medium text-gray-600 w-full">
              <Skeleton
                style={{ width: "50%" }}
                animation="wave"
                height={"100%"}
              />
            </span>
          </Typography>
        </div>
        <div className="pr-3 w-[20%]">
          <Typography variant="h6">
            <span className="font-semibold">
              <Skeleton style={{width: "100%"}} animation="wave" variant="text" height={"100%"} />
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
