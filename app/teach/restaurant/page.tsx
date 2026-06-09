"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Im1 from "../../img/comboboxes/1.png";
import Im2 from "../../img/comboboxes/2.gif";
import Im3 from "../../img/comboboxes/3.gif";
import Im4 from "../../img/comboboxes/4.gif";
import Im5 from "../../img/comboboxes/5.png";
import Im6 from "../../img/comboboxes/6.png";
import Im7 from "../../img/comboboxes/7.png";
import Im8 from "../../img/comboboxes/8.png";
import Im9 from "../../img/comboboxes/9.png";
import Im10 from "../../img/comboboxes/10.png";
import Im11 from "../../img/comboboxes/11.png";

import VIm1 from "../../img/vlookup/1.png";
import VIm2 from "../../img/vlookup/2.png";
import VIm3 from "../../img/vlookup/3.gif";
import VIm4 from "../../img/vlookup/4.gif";
import VIm5 from "../../img/vlookup/5.gif";

import RIm1 from "../../img/radiobuttons/1.png";
import RIm2 from "../../img/radiobuttons/2.gif";
import RIm3 from "../../img/radiobuttons/3.gif";
import RIm4 from "../../img/radiobuttons/4.gif";
import RIm5 from "../../img/radiobuttons/5.gif";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CustomLeftArrowProps {
  onClick?: () => void;
}

const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "2rem",
        maxWidth: "2rem",
        cursor: "pointer",
        color: "#94a3b8",
      }}
    >
      <FaChevronLeft />
    </button>
  );
};

interface CustomRightArrowProps {
  onClick?: () => void;
}

const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        right: "1rem",
        maxWidth: "1rem",
        cursor: "pointer",
        color: "#94a3b8",
      }}
    >
      <FaChevronRight />
    </button>
  );
};

interface CarouselItemProps {
  src: StaticImport;
}

const CarouselItem = (props: CarouselItemProps) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Image
        src={props.src}
        alt={"Combo Box 1"}
        style={{ width: "50%", height: "auto" }}
      />
    </div>
  );
};

interface PageItemProps {
  title: string;
  children?: React.ReactNode;
  dark?: boolean;
}

const PageItem = (props: PageItemProps) => {
  return (
    <div
      className={styles.pageItem}
      style={{
        height: "100vh",
        width: "100%",
        background: props.dark ? "#ffeaac" : "#fff2cc",
      }}
    >
      <h3 style={{ background: "none " }}>{props.title}</h3>
      {props.children}
    </div>
  );
};

interface TodoItemProps {
  text: string;
  onClick?: () => void;
  linked?: boolean;
}

const TodoItem = (props: TodoItemProps) => {
  const [tick, setTick] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          background: "#fff",
          border: "1px solid black",
          //   padding: "0 2px 2px 0",
          width: "20px",
          height: "20px",
          marginRight: "5px",
          fontSize: "16px",
          fontWeight: "bolder",
          lineHeight: "20px",
          cursor: "pointer",
        }}
        onClick={() => setTick((s) => !s)}
      >
        &nbsp;{tick ? "✓" : ""}
      </div>
      <div
        onClick={props.onClick}
        style={{
          color: props.linked ? "#246acc" : "black",
          cursor: props.linked ? "pointer" : "default",
        }}
      >
        {props.text}
      </div>
    </div>
  );
};

export default function Page() {
  const comboRef = useRef(null);
  const vLookupRef = useRef(null);
  const radioRef = useRef(null);
  const comboBoxImages = [
    Im1,
    Im2,
    Im3,
    Im4,
    Im5,
    Im6,
    Im7,
    Im8,
    Im9,
    Im10,
    Im11,
  ];

  const vLookupImages = [VIm1, VIm2, VIm3, VIm4, VIm5];
  const radioImages = [RIm1, RIm2, RIm3, RIm4, RIm5];

  const executeScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.page} style={{ backgroundColor: "#fff2cc" }}>
      <h1>Restaurant Model</h1>
      <div>Checklist</div>
      <div style={{ fontSize: "20px", textAlign: "left", marginLeft: "50px" }}>
        <TodoItem
          text={
            "Group the icon and the text together. Do this for all buttons."
          }
        />
        <TodoItem
          text={"Check that the restaurant name and worksheet title is there."}
        />
        <TodoItem text={"Copy the worksheet until there are 5 sheets."} />
        <TodoItem
          text={"Rename the worksheets: Home, Entry, Data, Receipt, Contact"}
        />
        <TodoItem
          text={
            "Link each button to the sheet (e.g. Home :- link to 'Home' sheet)"
          }
        />
        <TodoItem
          text={"Fill the 'Data' sheet with the food for the restaurant."}
        />
        <TodoItem
          text={"Make Combo Boxes for each food type."}
          onClick={() => executeScroll(comboRef)}
          linked
        />
        <TodoItem
          text={"Use VLOOKUP to find the price of each item selected."}
          onClick={() => executeScroll(vLookupRef)}
          linked
        />
        <TodoItem
          text={
            "Add two option buttons. One called 'small' and one called 'large'."
          }
          onClick={() => executeScroll(radioRef)}
          linked
        />
        <TodoItem
          text={"Format the buttons to add a cell link to the left."}
          onClick={() => executeScroll(radioRef)}
          linked
        />
        <TodoItem
          text={
            "Use the cell link value with an IF formula to set the fries price."
          }
          onClick={() => executeScroll(radioRef)}
          linked
        />
        <TodoItem text={"Add checkboxes for extra items (like sauce)"} />
        <TodoItem text={"Add IF formulas to set prices for these items."} />
        <TodoItem text={"Add all prices together."} />
        <TodoItem text={"Set a budget limit for the order."} />
        <TodoItem
          text={"Use IF to show if the order is over or under budget."}
        />
      </div>
      <div className={styles.pageItems}>
        <div ref={comboRef} />
        <PageItem title={"Make Combo Boxes"} dark>
          <Carousel
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
            }}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            showDots={true}
          >
            {Array.from({ length: 11 }).map((_, i) => (
              <CarouselItem src={comboBoxImages[i]} key={i} />
            ))}
          </Carousel>
        </PageItem>
        <div ref={vLookupRef} />
        <PageItem title={"Use VLOOKUP to find the price"}>
          <Carousel
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
            }}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            showDots={true}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem src={vLookupImages[i]} key={i} />
            ))}
          </Carousel>
        </PageItem>
        <div ref={radioRef} />
        <PageItem title={"Add Radio buttons for fries size"} dark>
          <Carousel
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
            }}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            showDots={true}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem src={radioImages[i]} key={i} />
            ))}
          </Carousel>
        </PageItem>
      </div>
    </div>
  );
}
