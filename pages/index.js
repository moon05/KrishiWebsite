import Head from 'next/head'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Footer from "../components/footer"

import App from "next/app";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    navBar: {
        backgroundColor: "green"
    },
    media: {
        height: 200,
        width: 300
    }
}));

export default function Home() {

    const classes = useStyles();

  return (
    <div>
        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Grid container xs={12} flexDirection="column">

            <Grid container item xs={12} flexDirection="row" >
                <AppBar position={"fixed"} alignItems="center">
                    <Tabs >
                    <Tab label={"Krishi Logo"}/>
                    <Tab label={"Search Bar"}/>
                    <Tab label={"Sign In/Your Account"}/>
                    <Tab label={"Your Cart"}/>
                    </Tabs>

                    <Tabs className={classes.navBar}>
                    <Tab label={"About Us"}/>
                    <Tab label={"Garden Fresh Produce"}/>
                    <Tab label={"Gardening Supplies"}/>
                    <Tab label={"Plants"}/>
                    <Tab label={"Recipes and Resources"}/>
                    <Tab label={"Join Our Team"}/>
                    <Tab label={"Krishi Membership"}/>
                    </Tabs>
                </AppBar>
            </Grid>
            <Grid container item xs={12} style={{marginTop: 100}}>
                <Typography variant={"h1"}>Vegetables</Typography>
            </Grid>

            <Grid container item xs={12} flexDirection="row">
                <Card style={{marginLeft:95, marginRight: 80}}>
                    <CardMedia className={classes.media} image={"/amaranth.jpeg"}></CardMedia>

                <CardContent>
                    <Typography>Amaranth / Laal Shaak</Typography>
                    <Typography>Available / Out of Stock</Typography>
                    <Typography>$ 6.99/lb</Typography>
                    <Typography>Add to Cart</Typography>
                </CardContent>
                </Card>

                <Card style={{marginRight: 80}}>
                    <CardMedia className={classes.media} image={"/malabar_spinach.jpeg"}></CardMedia>

                    <CardContent>
                        <Typography>Malabar Spinach / Pui Shaak</Typography>
                        <Typography>Available / Out of Stock</Typography>
                        <Typography>$ 6.99/lb</Typography>
                        <Typography>Add to Cart</Typography>
                    </CardContent>
                </Card>

                <Card style={{marginRight: 80}}>
                    <CardMedia className={classes.media} image={"/gourd.jpeg"}></CardMedia>

                    <CardContent>
                        <Typography>Malabar Spinach / Pui Shaak</Typography>
                        <Typography>Available / Out of Stock</Typography>
                        <Typography>$ 6.99/lb</Typography>
                        <Typography>Add to Cart</Typography>
                    </CardContent>
                </Card>

                <Card>
                    <CardMedia className={classes.media} image={"/gourd.jpeg"}></CardMedia>

                    <CardContent>
                        <Typography>Malabar Spinach / Pui Shaak</Typography>
                        <Typography>Available / Out of Stock</Typography>
                        <Typography>$ 6.99/lb</Typography>
                        <Typography>Add to Cart</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container item xs={12} justify={"center"} flexDirection="row">
                <Divider style={{marginTop: 20, marginBottom: 20, height: 5, width: "90%"}}/>
            </Grid>

        </Grid>


        <Footer/>
    </div>
  )
  // return (
  //   <div className="container">
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //
  //     <main>
  //       <h1 className="title">
  //         Learn <a href="https://nextjs.org">Next.js!</a>
  //       </h1>
  //
  //       <p className="description">
  //         Get started by editing <code>pages/index.js</code>
  //       </p>
  //
  //       <div className="grid">
  //         <a href="https://nextjs.org/docs" className="card">
  //           <h3>Documentation &rarr;</h3>
  //           <p>Find in-depth information about Next.js features and API.</p>
  //         </a>
  //
  //         <a href="https://nextjs.org/learn" className="card">
  //           <h3>Learn &rarr;</h3>
  //           <p>Learn about Next.js in an interactive course with quizzes!</p>
  //         </a>
  //
  //         <a
  //           href="https://github.com/vercel/next.js/tree/master/examples"
  //           className="card"
  //         >
  //           <h3>Examples &rarr;</h3>
  //           <p>Discover and deploy boilerplate example Next.js projects.</p>
  //         </a>
  //
  //         <a
  //           href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           className="card"
  //         >
  //           <h3>Deploy &rarr;</h3>
  //           <p>
  //             Instantly deploy your Next.js site to a public URL with Vercel.
  //           </p>
  //         </a>
  //       </div>
  //     </main>
  //
  //     <footer>
  //       <a
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Powered by{' '}
  //         <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
  //       </a>
  //     </footer>
  //
  //     <style jsx>{`
  //       .container {
  //         min-height: 100vh;
  //         padding: 0 0.5rem;
  //         display: flex;
  //         flex-direction: column;
  //         justify-content: center;
  //         align-items: center;
  //       }
  //
  //       main {
  //         padding: 5rem 0;
  //         flex: 1;
  //         display: flex;
  //         flex-direction: column;
  //         justify-content: center;
  //         align-items: center;
  //       }
  //
  //       footer {
  //         width: 100%;
  //         height: 100px;
  //         border-top: 1px solid #eaeaea;
  //         display: flex;
  //         justify-content: center;
  //         align-items: center;
  //       }
  //
  //       footer img {
  //         margin-left: 0.5rem;
  //       }
  //
  //       footer a {
  //         display: flex;
  //         justify-content: center;
  //         align-items: center;
  //       }
  //
  //       a {
  //         color: inherit;
  //         text-decoration: none;
  //       }
  //
  //       .title a {
  //         color: #0070f3;
  //         text-decoration: none;
  //       }
  //
  //       .title a:hover,
  //       .title a:focus,
  //       .title a:active {
  //         text-decoration: underline;
  //       }
  //
  //       .title {
  //         margin: 0;
  //         line-height: 1.15;
  //         font-size: 4rem;
  //       }
  //
  //       .title,
  //       .description {
  //         text-align: center;
  //       }
  //
  //       .description {
  //         line-height: 1.5;
  //         font-size: 1.5rem;
  //       }
  //
  //       code {
  //         background: #fafafa;
  //         border-radius: 5px;
  //         padding: 0.75rem;
  //         font-size: 1.1rem;
  //         font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
  //           DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  //       }
  //
  //       .grid {
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //         flex-wrap: wrap;
  //
  //         max-width: 800px;
  //         margin-top: 3rem;
  //       }
  //
  //       .card {
  //         margin: 1rem;
  //         flex-basis: 45%;
  //         padding: 1.5rem;
  //         text-align: left;
  //         color: inherit;
  //         text-decoration: none;
  //         border: 1px solid #eaeaea;
  //         border-radius: 10px;
  //         transition: color 0.15s ease, border-color 0.15s ease;
  //       }
  //
  //       .card:hover,
  //       .card:focus,
  //       .card:active {
  //         color: #0070f3;
  //         border-color: #0070f3;
  //       }
  //
  //       .card h3 {
  //         margin: 0 0 1rem 0;
  //         font-size: 1.5rem;
  //       }
  //
  //       .card p {
  //         margin: 0;
  //         font-size: 1.25rem;
  //         line-height: 1.5;
  //       }
  //
  //       .logo {
  //         height: 1em;
  //       }
  //
  //       @media (max-width: 600px) {
  //         .grid {
  //           width: 100%;
  //           flex-direction: column;
  //         }
  //       }
  //     `}</style>
  //
  //     <style jsx global>{`
  //       html,
  //       body {
  //         padding: 0;
  //         margin: 0;
  //         font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  //           Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
  //           sans-serif;
  //       }
  //
  //       * {
  //         box-sizing: border-box;
  //       }
  //     `}</style>
  //   </div>
  // )
}
