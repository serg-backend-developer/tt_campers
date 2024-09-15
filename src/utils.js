import toast from "react-hot-toast";

export const formatString = (str) => {
	return str
		.replace(/([A-Z])/g, " $1")
		.toLowerCase()
		.replace(/^\w/, (c) => c.toUpperCase());
};

export const addSpaceToUnit = (str) => {
	return str.replace(/(\d+\.?\d*)([a-zA-Z]+)/, "$1 $2");
};

const options = {
	position: "top-right",
	duration: 3000,
	ariaProps: { role: "status", "aria-live": "polite" },
};

export const messages = {
	success: (message) =>
		toast.success(message, {
			...options,
			style: { background: "#ffc531", color: "#101828" },
		}),
	info: (message) =>
		toast(message, {
			...options,
			style: { background: "#475467", color: "#fff" },
		}),
	error: (message) =>
		toast.error(message, {
			...options,
			style: { background: "#e44848", color: "#fff" },
		}),
};

export const getFilteredVehicleEquipment = ({
	AC,
	transmission,
	kitchen,
	TV,
	bathroom,
	engine,
	radio,
}) => {
	return [
		{ icon: "icon-ac", label: "AC", available: AC },
		{
			icon: "icon-automatic",
			label: "Automatic",
			available: transmission === "automatic",
		},
		{ icon: "icon-kitchen", label: "Kitchen", available: kitchen },
		{ icon: "icon-tv", label: "TV", available: TV },
		{ icon: "icon-bathroom", label: "Bathroom", available: bathroom },
		{ icon: "icon-fuel", label: engine, available: engine },
		{ icon: "icon-radio", label: "Radio", available: radio },
	].filter((item) => item.available);
};
