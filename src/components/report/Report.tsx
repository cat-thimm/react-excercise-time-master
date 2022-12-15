import styled from "styled-components";
import { useState } from "react";
import store from "../store/store";
import { observer } from "mobx-react";
import moment from "moment";

import { customerList } from "../store/store";
import { Row, Button } from "../../styled";

import MonthTable from "./month-table/MonthTable";
import WeekTable from "./week-table/WeekTable";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Body = styled.div`
  margin: 20px;
  margin-top: 0px;
  flex-grow: 100;
  background-color: white;
  padding: 20px;
`;

const Headline = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  border: 0px;
  font-family: "Poppins";
  font-size: 16px;
  background-color: rgba(195, 195, 187, 0.47);
  margin-right: 20px;
  margin-bottom: 20px;
  width: 111px;
  height: 38px;
  cursor: pointer;
  text-align: center;
`;

const ReportRow = styled(Row)`
  justify-content: space-between;
`;

const Total = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
  font-size: 24px;
`;

const ExportButton = styled(Button)`
  width: 150px;
  height: 44px;
`;

const Report = () => {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedView, setSelectedView] = useState("week");
  const [startOfWeek, setStartOfWeek] = useState(
    moment().startOf("week").toDate()
  );
  const [endOfWeek, setEndOfWeek] = useState(moment().endOf("week").toDate());

  const printDocument = () => {
    const input = document.getElementById("report");
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("landscape", "px", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("report.pdf");
      });
    }
  };

  return (
    <Body>
      <div id="report">
        <Headline>Report</Headline>
        <ReportRow>
          <Row>
            <Select
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
            >
              <option value="week">Woche</option>
              <option value="month">Monat</option>
            </Select>

            <Select
              value={selectedCustomer}
              onChange={(e) => setSelectedCustomer(e.target.value)}
            >
              <option value="">Alle</option>
              {customerList.map((customer, index) => {
                return (
                  <option value={customer} key={index}>
                    {customer}
                  </option>
                );
              })}
            </Select>
          </Row>
          {selectedCustomer === "" ? (
            <Total>
              Total:{" "}
              {selectedView === "month"
                ? store.monthlyWorkingHours
                : store.weeklyWorkingHours(startOfWeek, endOfWeek)}
              h
            </Total>
          ) : (
            <Total>
              Total:{" "}
              {selectedView === "month"
                ? store.monthlyWorkingHoursByCustomer(selectedCustomer)
                : store.weeklyWorkingHoursByCustomer(selectedCustomer, startOfWeek, endOfWeek)}
              h
            </Total>
          )}
        </ReportRow>
        {selectedView === "month" && (
          <div>
            <MonthTable customer={selectedCustomer} />
          </div>
        )}
        {selectedView === "week" && (
          <WeekTable
            customer={selectedCustomer}
            startOfWeek={startOfWeek}
            setStartOfWeek={setStartOfWeek}
            endOfWeek={endOfWeek}
            setEndOfWeek={setEndOfWeek}
          />
        )}{" "}
      </div>
      <ExportButton onClick={() => printDocument()}>Export to PDF</ExportButton>
    </Body>
  );
};

export default observer(Report);
