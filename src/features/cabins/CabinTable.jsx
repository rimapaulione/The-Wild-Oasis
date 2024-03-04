import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import useGetCabins from "./useGetCabins";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins } = useGetCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins) return <Empty resourceName="cabins" />;

  const filterValue = searchParams.get("discount") || "all";

  let filterCabins;
  if (filterValue === "all") filterCabins = cabins;
  if (filterValue === "no-discount")
    filterCabins = cabins.filter((cabin) => !cabin.discount);
  if (filterValue === "with-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount);

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabints = filterCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Table columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Menus>
        <Table.Body
          data={sortedCabints}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Menus>
    </Table>
  );
}

export default CabinTable;
