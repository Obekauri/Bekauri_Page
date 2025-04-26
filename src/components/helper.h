#ifndef HELPERS_H
#define HELPERS_H

#include <stdint.h> // for uint8_t

// Define the RGBTRIPLE struct
typedef struct
{
    uint8_t rgbtBlue;
    uint8_t rgbtGreen;
    uint8_t rgbtRed;
} RGBTRIPLE;

// Function prototypes (notice the * for image)
void grayscale(int height, int width, RGBTRIPLE image[][width]);
void reflect(int height, int width, RGBTRIPLE image[][width]);
void blur(int height, int width, RGBTRIPLE image[][width]);
void edges(int height, int width, RGBTRIPLE image[][width]);

#endif