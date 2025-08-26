import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { motion } from 'framer-motion'
import ProfImage from '../assets/image/Avatar.jpg'
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const typeTexts = ["Web Developer", "Backend Engineer"];
const navItems = ["Home","About", "Projects & Skills","Services", "Contact"];

const Hero = () => {
  const [typed, setTyped] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  

  useEffect(() => {
    let current = 0;
    let typing = true;
    let interval: ReturnType<typeof setInterval>;

    const typeLoop = () => {
      interval = setInterval(() => {
        if (typing) {
          setTyped(typeTexts[textIndex].slice(0, current + 1));
          current++;
          if (current === typeTexts[textIndex].length) {
            typing = false;
            setTimeout(() => {
              typing = false;
              clearInterval(interval);
              setTimeout(() => {
                typing = true;
                current = 0;
                setTextIndex((prev) => (prev + 1) % typeTexts.length);
              }, 1000);
            }, 1000);
          }
        }
      }, 120);
    };

    typeLoop();

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <>
      {/* Sticky Navbar */}
      <AppBar 
        position="sticky" 
        color="default" 
        elevation={1}
        sx={{ backgroundColor: 'background.paper' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{fontSize: '40px'}}>
                <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '10px', color: '#b8b1b1ff' }} />
                CHRIS
            </Typography>
          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button key={item} color="inherit" sx={{ '&:hover': { color: 'primary.main' } }}>
                {item}
              </Button>
            ))}
          </Box>
          {/* Mobile Hamburger */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Drawer for Mobile Nav */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 200 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'space-between' },
          height: { xs: 'auto', md: 'calc(100vh - 64px)' },
          backgroundColor: 'background.default',
          px: { xs: 2, md: 8 },
          py: { xs: 4, md: 0 },
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Left Side: Text */}
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '320px',
            maxWidth: '600px',
        }}
        >
        <Box
            sx={{
            alignItems: { xs: 'center', md: 'flex-start' },
            marginLeft: { md: '10vw' },
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            }}
        >
            {/* Main Intro */}
            <Typography
            variant="h2"
            gutterBottom
            sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                textAlign: { xs: 'center', md: 'left' },
            }}
            >
            Hi, I am Chris
            </Typography>

            {/* Animated profession text */}
            <Typography
            variant="h4"
            sx={{
                fontFamily: 'monospace',
                color: 'text.primary',
                mb: 2,
                minHeight: '48px',
                letterSpacing: 2,
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                textAlign: { xs: 'center', md: 'left' },
            }}
            >
            and I'm a <span style={{ color: '#1976d2' }}>{typed}</span>
            </Typography>

            {/* Paragraph */}
            <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{
                maxWidth: '500px',
                textAlign: { xs: 'center', md: 'left' },
                mb: 3,
            }}
            >
            I am a Web Developer/Backend Engineer with extensive experience for over 2 Years. My goal is to build efficient and scalable web applications that deliver exceptional user experiences.
            {/* add more */}


            </Typography>

            {/* Button */}
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button variant="contained" color="primary" size="large">
                More About Me
            </Button>
            </Box>
        </Box>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ width: '50%', display: 'flex', justifyContent: 'center' }}
        >
          <Avatar
            alt="Profile"
            src={ProfImage}
            sx={{
              width: { xs: 180, sm: 220, md: 300 },
              height: { xs: 180, sm: 220, md: 400 },
              boxShadow: 3,
            }}
          />
        </motion.div>
      </Box>
    </>
  )
}

export default Hero