import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

 function Tab_Pro() {
  const data = [
    {
      label: "All",
      value: "All",
      img: "",
    },
    {
      label: "React",
      value: "react",
      img: "",
    },

    {
      label: "HTML",
      value: "HTML",
      img: "",
    },
  ];

  return (
    <Tabs id="custom-animation" value="html">
      <TabsHeader className="w-40 flex justify-center items-center">
        {data.map(({ label, value }) => (
          <Tab
            className=" flex justify-center items-center"
            key={value}
            value={value}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, img }) => (
          <TabPanel key={value} value={value}>
            <img src={img} alt="mm" />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default Tab_Pro