import {
  Avatar,
  Container,
  Grid,
  Box,
  Typography,
  LinearProgress,
} from "@mui/material";
import { Toolbar, AppBar, Button } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type MenuType = {
  price: number;
  isinterest: boolean;
  isAdjustable: boolean;
};

const TradeAppBar = (props: MenuType): JSX.Element => {
  const { price, isinterest, isAdjustable } = props;
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
    >
      <Toolbar>
        <Grid container>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {isinterest ? (
              <FavoriteIcon color="secondary" fontSize="large" />
            ) : (
              <FavoriteBorderIcon color="primary" fontSize="large" />
            )}
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5" color="#2b2b2b">
                  <strong>{price}원</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="#2b2b2b">
                  <strong>
                    {isAdjustable ? "가격 제안가능" : "가격 제안 불가"}
                  </strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
            <Button variant="contained" color="secondary" fullWidth>
              채팅으로 거래하기
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TradeAppBar;
