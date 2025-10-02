import { PAGE_LIMIT } from "../constants";

export default function Pagination({ page, total, onChange }) {
  const totalPages = Math.ceil(total / PAGE_LIMIT);

  return (
    <div style={{ margin: "10px auto", textAlign: "center" }}>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageIndex) => {
          const isActive = pageIndex === page;

          const action = () => {
            if (pageIndex !== page) {
              onChange(pageIndex);
            }
          };

          return isActive ? (
            <b key={pageIndex} onClick={action} style={{ margin: "0 5px" }}>
              {pageIndex}
            </b>
          ) : (
            <span key={pageIndex} onClick={action} style={{ margin: "0 5px" }}>
              {pageIndex}
            </span>
          );
        }
      )}
    </div>
  );
}
