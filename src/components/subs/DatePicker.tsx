"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "date-fns/locale/vi";
import viLocale from "date-fns/locale/vi";
import { Locale, format } from "date-fns";
interface IPorps {
  onChange: (date: Date) => void;
  filterDate?: (date: Date) => boolean;
}
const DatePickerCpn: React.FC<IPorps> = (props) => {
  const { filterDate, onChange } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div className="date">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date) => {
          if (date) {
            const formattedDate = format(date, "yyyy-MM-dd");
            onChange(date);
          }
          setSelectedDate(date);
        }}
        dateFormat="dd/MM/yyyy"
        open
        inline
        locale={viLocale as unknown as Locale}
        filterDate={filterDate}
      />
    </div>
  );
};

export default DatePickerCpn;
