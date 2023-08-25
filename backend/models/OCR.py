import cv2 
import numpy as np
import pytesseract
# pytesseract.pytesseract.tesseract_cmd = '"C:\Program Files\Tesseract-OCR"'

image = cv2.imread('Screenshot 2023-08-25 180738.png')

def ocr_core(img):
    text = pytesseract.image_to_string(img)
    return text

def get_grayscale(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

def remove_noise(image):
    return cv2.medianBlur(image,5)

def thresholding(image):
    return cv2.threshold(image, 0, 255, cv2.THRESH_BINARY+cv2.THRESH_OTSU)[1]

image = get_grayscale(image)
image = thresholding(image)    
image = remove_noise(image)

print(ocr_core(image))




