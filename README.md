# Create a Clock live Time Zone
 ```
 // 1. Method ✨😂
  /*  const [currTime, setcurrTime] = useState("")
  axios
    .get("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    .then((res) => {
      //console.log(res);
      const t = new Date(res.data.datetime);
      //console.log(t.toLocaleTimeString);
      setcurrTime(t.toLocaleTimeString());

    })
    .catch((err) => {}); */

  // 2 . Method 🟢🤑
  /*   const date = new Date();
  //const currTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const currTime = date.toLocaleTimeString(); */

  // 3. Method 🤙🥰
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      console.log("watching");
      const t = new Date();
      const c = t.getHours() - 12;
      console.log(c);
      setDateState(new Date());
    }, 1000);
  }, []);

  return (
    <>
      {/*  <h1>{currTime}</h1> */} {/* This is use with the API  */}
      <p>
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "2-digit",
          //hour12: true,
        })}
      </p>
    </>
  );
```
