import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div class="row">
      <div class="col-xs-12 col-sm-6 example-col">
        <h4>Checkbox Component</h4>
        <p>
          <kendo-checkbox #checkedState [checkedState]="true"></kendo-checkbox>
          <kendo-label
            class="k-checkbox-label"
            [for]="checkedState"
            text="Checked"
          ></kendo-label>
        </p>
        <p>
          <kendo-checkbox #uncheckedState></kendo-checkbox>
          <kendo-label
            class="k-checkbox-label"
            [for]="uncheckedState"
            text="Unchecked"
          ></kendo-label>
        </p>
        <p>
          <kendo-checkbox
            #indentState
            checkedState="indeterminate"
          ></kendo-checkbox>
          <kendo-label
            class="k-checkbox-label"
            [for]="indentState"
            text="Indeterminate"
          ></kendo-label>
        </p>
        <p>
          <kendo-checkbox
            #disabledState
            [disabled]="true"
            [checkedState]="true"
          ></kendo-checkbox>
          <kendo-label
            class="k-checkbox-label"
            [for]="disabledState"
            text="Disabled"
          ></kendo-label>
        </p>
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <h4>HTML Checkbox</h4>
        <p>
          <input type="checkbox" #checked kendoCheckBox [checked]="true" />
          <kendo-label
            class="k-checkbox-label"
            [for]="checked"
            text="Checked"
          ></kendo-label>
        </p>
        <p>
          <input type="checkbox" #unchecked kendoCheckBox />
          <kendo-label
            class="k-checkbox-label"
            [for]="unchecked"
            text="Unchecked"
          ></kendo-label>
        </p>
        <p>
          <input type="checkbox" #indent kendoCheckBox [indeterminate]="true" />
          <kendo-label
            class="k-checkbox-label"
            [for]="indent"
            text="Indeterminate"
          ></kendo-label>
        </p>
        <p>
          <input
            type="checkbox"
            #disabled
            kendoCheckBox
            [disabled]="true"
            [checked]="true"
          />
          <kendo-label
            class="k-checkbox-label"
            [for]="disabled"
            text="Disabled"
          ></kendo-label>
        </p>
      </div>
    </div>
  `,
})
export class AppComponent {}
