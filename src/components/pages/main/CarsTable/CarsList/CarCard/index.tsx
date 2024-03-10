import CustomCard from "@/components/UI/Card";
import { CarOnFront } from "@/types";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

interface CardCardProps {
  car: CarOnFront;
}

export default function CarCard({ car }: CardCardProps) {
  const title = car.title;
  const image = car.image;
  const id = car.readbleId
  const { push } = useRouter()

  function redirectToDetailCar() {
    push(`/${id}`)
  }
  return (
    <CustomCard sx={{ flex: "1 1 25%", maxWidth: "400px" }}>
      {image && (
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
      )}
      <CardActionArea onClick={redirectToDetailCar}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
}
