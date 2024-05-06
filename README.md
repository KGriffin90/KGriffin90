package main

import (
	"fmt"
)

type Bio map[string]string

func main() {
	for k, v := range GetBio() {
		fmt.Printf("%+v: %+v\n", k, v)
	}
}

func GetBio() Bio {
	return Bio{
		"- Quick bio:":                    "A software developer based in Salt Lake City, UT"
		"- I’m currently working on":      "Divulge, a blog site which makes you question how much are you willing to divulge?",
		"- I’m currently learning":        "Python, React, Ruby",
		"- 👯 I’m looking to collaborate on": "Java, Python, and JavaScript related projects",
		"- 🤔 I’m looking for help with":     "Anything related to machine learning and neural networks",
		"- 📫 How to reach me:":              "https://kgriffin90.github.io/KGriffin90/",
	}
}
