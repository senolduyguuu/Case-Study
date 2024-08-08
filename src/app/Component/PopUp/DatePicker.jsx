// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

const CustomDatePicker = () => {
	// const [startDate, setStartDate] = useState(new Date())
	// const [endDate, setEndDate] = useState(new Date())

	return (
		<div className="flex">
			<p>date picker</p>
			{/* <DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				selectsStart
				startDate={startDate}
				endDate={endDate}
				dateFormat="dd.MM.yyyy"
				// className=" px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
				placeholderText="Başlangıç Tarihi"
			/>
			<span className=" text-gray-500">-</span>
			<DatePicker
				selected={endDate}
				onChange={(date) => setEndDate(date)}
				selectsEnd
				startDate={startDate}
				endDate={endDate}
				minDate={startDate}
				dateFormat="dd.MM.yyyy"
				// className=" px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
				placeholderText="Bitiş Tarihi"
			/> */}

		</div>
	)
}

export default CustomDatePicker
