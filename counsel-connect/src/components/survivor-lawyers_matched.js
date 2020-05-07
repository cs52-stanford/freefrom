import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import './LawyerCarousel.css'
import { css } from "@emotion/core";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';

import { Card, CardContent, CardMedia, Typography, Grid, Button, Checkbox, FormControlLabel, Radio, RadioGroup, FormLabel, Slider } from '@material-ui/core';
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    Media: {
      width: "100%",
      height: "150%",
      flexGrow: 5,
    },
    image: {
        height: 10,
    },
    ViewProfile: {
        marginRight: theme.spacing(0.5),
    }
    
  }));

function Banner(props)
{
    const classes = useStyles();
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    
    for (let i = 0; i < totalItems; i++)
    {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                {/* <Link href={`/item/${item.Id}`} className="Link"> */}
                        <CardMedia
                            className={classes.Media}
                            image={item.Image}
                            title={item.Name}
                            >
                        <Typography className="MediaCaption" variant="h5">
                            {item.Name}
                        </Typography>

                        <ColorButton 
                            variant="contained" 
                            color="primary" 
                            className="ViewProfile"
                            onClick={() => {
                                props.setLawyerName(item.Name);
                                props.setLawyerImage(item.Image);
                                props.setViewProfile(true);
                            }}
                            >
                            View Profile
                        </ColorButton>
                    </CardMedia>
                {/* </Link> */}
                
            </Grid>
        )

        items.push(media);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {Items: [
            {
        Name: "RBG",
        Image: "https://api.oyez.org/sites/default/files/images/people/ruth_bader_ginsburg/ruth_bader_ginsburg.jpg",
        contentPosition: "left",
            },
        {
              Name: "Amy",
              Image: "https://images.squarespace-cdn.com/content/v1/56a24df4d8af10a5072bed7c/1563939557942-M33YY0ZL2ZN7Y0RR14Q7/ke17ZwdGBToddI8pDm48kBelsVAev15nrlBAFMzKsdEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tU2ReFwpVgSm7x-SgOFtAmJMoyi-Ta5HHhO2BVXHKKXdZR9z9mxWb0yLUToVqwSd/UNADJUSTEDNONRAW_thumb_23b.jpg",
              contentPosition: "middle",
        },
          {
              Name: "Drew",
              Image: "https://www.callahan-law.com/wp-content/uploads/2020/01/att-bio-harbur.jpg"
          }
      ]
  },
  {Items: [
    {
    Name: "Drew",
      Image: "https://www.callahan-law.com/wp-content/uploads/2020/01/att-bio-harbur.jpg",
      contentPosition: "middle",
    },
    {
    Name: "RBG",
    Image: "https://api.oyez.org/sites/default/files/images/people/ruth_bader_ginsburg/ruth_bader_ginsburg.jpg",
    },
    {
    Name: "Amy",
    Image: "https://images.squarespace-cdn.com/content/v1/56a24df4d8af10a5072bed7c/1563939557942-M33YY0ZL2ZN7Y0RR14Q7/ke17ZwdGBToddI8pDm48kBelsVAev15nrlBAFMzKsdEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tU2ReFwpVgSm7x-SgOFtAmJMoyi-Ta5HHhO2BVXHKKXdZR9z9mxWb0yLUToVqwSd/UNADJUSTEDNONRAW_thumb_23b.jpg"
    },
]
},
  {Items: [
      {
      Name: "RBG",
      Image: "https://api.oyez.org/sites/default/files/images/people/ruth_bader_ginsburg/ruth_bader_ginsburg.jpg",
      contentPosition: "right",
      },
      {
        Name: "Drew",
        Image: "https://www.callahan-law.com/wp-content/uploads/2020/01/att-bio-harbur.jpg"
        },
          {
        Name: "Amy",
        Image: "https://images.squarespace-cdn.com/content/v1/56a24df4d8af10a5072bed7c/1563939557942-M33YY0ZL2ZN7Y0RR14Q7/ke17ZwdGBToddI8pDm48kBelsVAev15nrlBAFMzKsdEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tU2ReFwpVgSm7x-SgOFtAmJMoyi-Ta5HHhO2BVXHKKXdZR9z9mxWb0yLUToVqwSd/UNADJUSTEDNONRAW_thumb_23b.jpg"
        }
      ]
  }
]

class LawyersCarousel extends React.Component
{


    constructor(props)
    {
        super(props);

        this.state = {
            autoPlay: false,
            timer: 500,
        };

        autoBind(this);
    }



    changeTimeout(event, value)
    {
        this.setState({
            timeout: value
        })
    }

    render()
    {
        return (
            <div style={{marginTop: "120px"}}>

                <Carousel 
                    className={css`
                        height: 300px;
                    `}
                    autoPlay={this.state.autoPlay}
                    className="Example"
                >
                    {
                        items.map( (item, index) => {
                            return <Banner 
                                item={item} 
                                key={index} 
                                contentPosition={item.contentPosition}
                                viewProfile={this.props.viewProfile}
                                setViewProfile={this.props.setViewProfile}
                                setLawyerImage={this.props.setLawyerImage}
                                setLawyerName={this.props.setLawyerName}
                                />
                        })
                    }
                </Carousel>
                
            </div>
            
        )
    }
}


const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(amber[900]),
      backgroundColor: amber[900],
      '&:hover': {
        backgroundColor: amber[900],
      },
    },
  }))(Button);

export default LawyersCarousel;