import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardHeader } from "@material-ui/core";
import ItemTextFields from "./ItemTextFields/ItemTextFields";
import { addingItemStyles } from "../../../../styles/styles";
import SelectDate from "./SelectDate/SelectDate";
import { ItemsContext } from "../../../../data/context";
import ActionButtons from "./ActionButtons/ActionButtons";
import moment from "moment";
import reverseDate from "../../../../utils/functions/reverseDate";

function Form(props) {
  const { classes } = props;
  return (
    <Card className={classes.Card}>
      <CardHeader title="Редактировать" />
      <form className={classes.Form}>
        <ItemTextFields />
        <ItemsContext.Consumer>
          {({
            state: {
              itemsCollection,
              elementIndex: { index }
            }
          }) => {
            const item = itemsCollection[index];
            const { date } = item;
            const formattedDate = moment(reverseDate(date));
            return <SelectDate date={formattedDate} />;
          }}
        </ItemsContext.Consumer>
        <ActionButtons toggleEditDrawer={props.toggleEditDrawer} />
      </form>
    </Card>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(addingItemStyles)(Form);
