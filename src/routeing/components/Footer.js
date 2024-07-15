import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Box,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
} from "@mui/icons-material";

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We are a team of dedicated professionals committed to providing
              excellent service and solutions.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" variant="body2" display="block">
              Home
            </Link>
            <Link
              href="/about-us"
              color="inherit"
              variant="body2"
              display="block"
            >
              About Us
            </Link>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <IconButton color="primary" aria-label="phone">
                <Phone />
              </IconButton>
              <Link href="tel:+123456789" color="inherit" variant="body2">
                +123 456 789
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <IconButton color="primary" aria-label="email">
                <Email />
              </IconButton>
              <Link
                href="mailto:info@example.com"
                color="inherit"
                variant="body2"
              >
                info@example.com
              </Link>
            </Typography>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="primary" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton color="primary" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton color="primary" aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton color="primary" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
