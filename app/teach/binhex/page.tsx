"use client";
import React, { useState } from "react";
import styles from "../../styles/page.module.css";

interface SymbolRowProps {
  k: string | number;
  v: string | number;
}

const SymbolRow = (props: SymbolRowProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          border: "1px solid black",
          width: "50%",
          height: "35px",
          background: "#fff2cc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        {props.k}
      </div>
      <div
        style={{
          border: "1px solid black",
          width: "50%",
          height: "35px",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        {props.v}
      </div>
    </div>
  );
};

export default function Page() {
  const [numBits, setNumBits] = useState(8);
  const [bitValues, setBitValues] = useState(Array(numBits).fill(0));
  const [base, setBase] = useState(2);
  const [showHexSymbolKeys, setShowHexSymbolKeys] = useState(false);

  return (
    <div
      className={styles.page}
      style={{ height: 100 + "vh", backgroundColor: "#fbfef4" }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,

            width: "10%",
            fontSize: "20px",
            backgroundColor: "#fff2cc",
            cursor: "pointer",
          }}
        >
          <div
            style={{ border: "1px solid black" }}
            onClick={() => setShowHexSymbolKeys((s) => !s)}
          >
            Hex Symbols Pane
          </div>
          {showHexSymbolKeys && (
            <>
              <SymbolRow k={0} v={"0"} />
              <SymbolRow k={1} v={"1"} />
              <SymbolRow k={2} v={"2"} />
              <SymbolRow k={3} v={"3"} />
              <SymbolRow k={4} v={"4"} />
              <SymbolRow k={5} v={"5"} />
              <SymbolRow k={6} v={"6"} />
              <SymbolRow k={7} v={"7"} />
              <SymbolRow k={8} v={"8"} />
              <SymbolRow k={9} v={"9"} />
              <SymbolRow k={"A"} v={10} />
              <SymbolRow k={"B"} v={11} />
              <SymbolRow k={"C"} v={12} />
              <SymbolRow k={"D"} v={13} />
              <SymbolRow k={"E"} v={14} />
              <SymbolRow k={"F"} v={15} />
            </>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "20%",
            height: "100%",

            backgroundColor: "#fff2cc",
          }}
        ></div>
        <div>
          <label style={{ fontSize: "20px", width: "50px" }}>Bits</label>
          <input
            type="number"
            value={numBits}
            onChange={(e) => {
              const newNumBits = parseInt(e.target.value);
              setNumBits(newNumBits);
              setBitValues(Array(newNumBits).fill(0));
            }}
            style={{ fontSize: "20px", width: "50px", margin: "0 20px" }}
          />
        </div>
        <div>
          <label style={{ fontSize: "20px", width: "50px" }}>Base</label>
          <input
            type="number"
            value={base}
            onChange={(e) => {
              setBase(parseInt(e.target.value));
              setBitValues(Array(numBits).fill(0));
            }}
            style={{ fontSize: "20px", width: "50px", margin: "0 20px" }}
          />
        </div>
      </div>
      <div
        id="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40vh",
        }}
      >
        <div id="exponents" style={{ display: "flex", flexDirection: "row" }}>
          {[...Array(numBits)].map((bit, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
                width: "80px",
                minHeight: "80px",
                backgroundColor: "#fff2cc",
                fontSize: "20px",
                color: "blue",
                userSelect: "none",
                wordBreak: "break-all",
              }}
            >
              {Math.pow(base, numBits - index - 1) > 100000
                ? Math.pow(base, numBits - index - 1).toExponential()
                : Math.pow(base, numBits - index - 1)}
            </div>
          ))}
        </div>
        <div id="bitValues" style={{ display: "flex", flexDirection: "row" }}>
          {[...Array(numBits)].map((bit, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
                width: "80px",
                height: "80px",
                backgroundColor: "white",
                fontSize: "40px",
                color: "black",
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={() => {
                const newBitValues = [...bitValues];
                newBitValues[index] =
                  newBitValues[index] === base - 1
                    ? 0
                    : newBitValues[index] + 1;
                setBitValues(newBitValues);
              }}
            >
              {bitValues[index] > 9
                ? bitValues[index].toString(16).toUpperCase()
                : bitValues[index]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
