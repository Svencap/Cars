import CustomCard from "@/components/UI/Card";
import { CardActionArea, CardContent, Typography } from "@mui/material";

interface CardCardProps {
  //   image: string;
  //   brand: string;
  //   model: string;
  //   color: string;
  //   year: string;
  //   engineType: string;
  //   transmisson: string;
  //   powerReserve?: string;
  car: any;
}

export default function CarCard({car}: CardCardProps) {
  return (
    <CustomCard sx={{ flex: '1 1 25%' }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
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
