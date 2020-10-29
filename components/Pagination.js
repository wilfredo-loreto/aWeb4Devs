import React from "react";
import PropTypes from "prop-types";
import styles from "./ContentArticles.module.scss";

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
};

const defaultProps = {
  initialPage: 1,
  pageSize: 12,
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {}, optionSelected: "Most recents" };
  }

  componentWillMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }
  // Select order desplegable animation
  showOptions() {
    var options = document.getElementById("options");
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var icon = document.getElementById("icon");

    options.classList.toggle(styles.hide);
    icon.classList.toggle(styles.iconActive);

    if (option1.classList.item(0) == styles.option) {
      option1.classList.replace(styles.option, styles.optionHide);
      option2.classList.replace(styles.option, styles.optionHide);
    } else {
      option1.classList.replace(styles.optionHide, styles.option);
      option2.classList.replace(styles.optionHide, styles.option);
    }
  }

  // Choise new order for cards
  newOrder(x) {
    var aux = true;
    var result;

    if (
      (x == 1 && this.state.optionSelected == "Most recents") ||
      (x == 2 && this.state.optionSelected == "Technology")
    ) {
      aux = false;
      this.showOptions();
    }

    if (aux) {
      switch (x) {
        case 1:
          result = "Most recents";

          const newestOrder = this.props.items.sort((a, b) => {
            if (
              b.date.split("T")[0].split("-")[0] -
                a.date.split("T")[0].split("-")[0] ==
              0
            ) {
              if (
                b.date.split("T")[0].split("-")[1] -
                  a.date.split("T")[0].split("-")[1] ==
                0
              ) {
                return (
                  b.date.split("T")[0].split("-")[2] -
                  a.date.split("T")[0].split("-")[2]
                );
              } else {
                return (
                  b.date.split("T")[0].split("-")[1] -
                  a.date.split("T")[0].split("-")[1]
                );
              }
            } else {
              return (
                b.date.split("T")[0].split("-")[0] -
                a.date.split("T")[0].split("-")[0]
              );
            }
          });
          this.setState({ articles: newestOrder, optionSelected: result });
          break;
        case 2:
          result = "Visits";

          const newOrder1 = this.props.items.sort((a, b) => {
            return b.visits - a.visits;
          });

          this.setState({ optionSelected: result, articles: newOrder1 });

          break;
      }
      this.showOptions();
      this.setPage(1);
    }
  }

  setPage(page) {
    var { items, pageSize } = this.props;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, pageSize);

    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager: pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 12;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 6) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 6;
      } else if (currentPage + 3 >= totalPages) {
        startPage = totalPages - 5;
        endPage = totalPages;
      } else {
        startPage = currentPage - 3;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <React.Fragment>
        <div className={styles.containerOrder}>
          <div className={styles.order}>
            <span onClick={() => this.showOptions()}>Sort by:</span>
            <div className={styles.selected}>
              <span
                onClick={() => this.showOptions()}
                className={styles.showed}
              >
                {this.state.optionSelected}
              </span>
              <div
                id="options"
                className={[styles.options, styles.hide].join(" ")}
              >
                <span
                  onClick={() => this.newOrder(1)}
                  id="option1"
                  className={styles.optionHide}
                >
                  Most recents
                </span>
                <span
                  onClick={() => this.newOrder(2)}
                  id="option2"
                  className={styles.optionHide}
                >
                  Visits
                </span>
              </div>
            </div>
            <img
              id="icon"
              onClick={() => this.showOptions()}
              className={styles.icon}
              src="/icons/optionArros.png"
            />
          </div>
        </div>
        <div className={styles.containerPagination}>
          <ul className="pagination">
            <li className={pager.currentPage === 1 ? styles.disabled : ""}>
              <a onClick={() => this.setPage(1)}>
                <img src="/icons/double-arrow-left.png" />
              </a>
            </li>
            <li className={pager.currentPage === 1 ? styles.disabled : ""}>
              <a onClick={() => this.setPage(pager.currentPage - 1)}>
                <img src="/icons/arrow-left.png" />
              </a>
            </li>
            {pager.pages.map((page, index) => (
              <li
                key={index}
                className={pager.currentPage === page ? styles.active : ""}
              >
                <a onClick={() => this.setPage(page)}>{page}</a>
              </li>
            ))}
            <li
              className={
                pager.currentPage === pager.totalPages ? styles.disabled : ""
              }
            >
              <a onClick={() => this.setPage(pager.currentPage + 1)}>
                <img src="/icons/arrow-right.png" />
              </a>
            </li>
            <li
              className={
                pager.currentPage === pager.totalPages ? styles.disabled : ""
              }
            >
              <a onClick={() => this.setPage(pager.totalPages)}>
                <img src="/icons/double-arrow-right.png" />
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
