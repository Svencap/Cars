import { Skeleton, Stack } from "@mui/material";

export default function SkeletonList() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Stack direction="row" gap="20px" flexWrap="wrap" mt="20px">
      {array.map((idx) => (
        <Skeleton width="100%" key={idx} variant="rounded" height="300px" sx={{ flex: '1 1 25%'}}/>
      ))}
    </Stack>
  );
}
