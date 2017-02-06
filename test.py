#!/usr/bin/env python

import cv2
import numpy
import urllib.request
import requests
import sys


response = requests.get(sys.argv[1], stream=True)
if response.status_code == 200:
    with open("img/sample.jpg", 'wb') as f:
        f.write(response.content)
img = cv2.imread('img/sample.jpg', 0)
_, contours, _ = cv2.findContours(img.copy(), cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_L1)
centres = []
for i in range(len(contours)):
  moments = cv2.moments(contours[i])
  centres.append(1)
count = 0
if (len(centres) > 2):
	count = 2
else:
	count = 1
with open('output.txt', 'a') as out:
    out.write(str(count))