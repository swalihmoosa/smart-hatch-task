import CalculateSavings from "./_components/CalculateSavings";
import InnerSpotlight from "./_components/InnerSpotlight";
import PersonalizedFinance from "./_components/PersonalizedFinance";

export default function page() {
	return (
		<>
			<InnerSpotlight />
			<CalculateSavings />
			<PersonalizedFinance />
		</>
	);
}
