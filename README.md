> Written with [StackEdit](https://stackedit.io/).
> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<!-- ctrl + shift + v -->

## Getting Started

  

Run the development server:
```bash

npm  run  dev

```
Open [http://localhost:3000](http://localhost:3000)  to see the result.

> This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

  

### Resources
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

>  Check out the [Next.js GitHub repository](https://github.com/vercel/next.js/)

## todo

Here are the things that I should do:
 - [ ] Implement Search
	1. Search by prompt
	2. Search by tag
	3. Search by username

- [ ] Implement Click on tag

- [ ] Implement View other profiles

	- Create new dynamic [id] folder in profile

	- by fetching POST from different users

## file structure
```
./
├───app
│   ├───api
│   │   ├───auth
│   │   │   └───[...nextauth]
│   │   ├───prompt
│   │   │   ├───new
│   │   │   └───[id]
│   │   ├───users
│   │   │   └───[id]
│   │   │       └───posts
│   │   └───weather
│   ├───create-prompt
│   ├───profile
│   ├───update-prompt
|   └───<layout file here>
├───components
│   └───(I need to refactor this folder)
├───models
│   └───
├───public
│   └───assets
│       ├───icons
│       ├───images
│       └───weather-icons
├───styles
└───utils
```

  


