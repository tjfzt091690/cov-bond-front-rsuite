// flow-typed signature: e376a3d73614f40fb4260a02a1b63746
// flow-typed version: 4939627303/rsuite_v3.x.x/flow_>=v0.53.x

declare module "rsuite" {

  declare type moment$Moment = Object;
  declare type Size = "lg" | "md" | "sm" | "xs";
  declare type Types = "success" | "warning" | "error" | "info";
  declare type PickerAppearanceType = "default" | "subtle";
  declare type SVGIcon = { viewBox: string, id: string };
  declare type Color =
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "cyan"
    | "blue"
    | "violet";

  declare type TriggerType = "click" | "hover";
  declare type WhisperTriggerType = "click" | "hover" | "focus" | "active";
  declare type DropdownTriggerType = "click" | "hover" | "contextMenu";
  declare type PlacementFourSides = "top" | "right" | "bottom" | "left";
  declare type PlacementEightPoints =
    | "bottomStart"
    | "bottomEnd"
    | "topStart"
    | "topEnd"
    | "leftStart"
    | "leftEnd"
    | "rightStart"
    | "rightEnd";

  declare type PlacementAuto =
    | "auto"
    | "autoVertical"
    | "autoVerticalStart"
    | "autoVerticalEnd"
    | "autoHorizontal"
    | "autoHorizontalStart"
    | "autoHorizontalEnd";

  declare type Placement = PlacementEightPoints | PlacementAuto;
  declare type ItemDataType = {
    label: mixed,
    value: mixed
  };

  declare type AnimationCallbackProps = {
    onEnter?: () => void,
    onEntering?: () => void,
    onEntered?: () => void,
    onExit?: () => void,
    onExiting?: () => void,
    onExited?: () => void
  };

  declare type SelectProps = {
    menuStyle?: Object,
    menuClassName?: string,
    valueKey?: string,
    labelKey?: string
  };

  declare type PickerProps = {
    className?: string,
    classPrefix?: string,
    toggleComponentClass?: React$ElementType,
    style?: Object,
    container?: HTMLElement | (() => HTMLElement),
    containerPadding?: number,
    cleanable?: boolean,
    open?: boolean,
    defaultOpen?: boolean,
    placement?: Placement,
    block?: boolean,
    disabled?: boolean,
    placeholder?: string,
    renderMenu?: (itemLabel: React$Node, item: Object) => React$Node,
    onOpen?: () => void,
    onClose?: () => void
  } & AnimationCallbackProps;

  declare export class Cascader extends React$Component<
    PickerProps &
      SelectProps & {
        appearance?: PickerAppearanceType,
        childrenKey?: string,
        data: Array<any>,
        renderExtraFooter?: () => React$Node,
        value?: any,
        defaultValue?: any,
        onChange?: (value: any, event: SyntheticEvent<*>) => void,
        onSelect?: (
          value: any,
          activePaths: Array<any>,
          event: SyntheticEvent<*>
        ) => void,
        renderValue?: (activePaths?: Array<any>) => React$Node,
        renderMenuItem?: (itemLabel: React$Node, item: Object) => React$Node,
        menuWidth?: number,
        menuHeight?: number,
        disabledItemValues?: Array<any>
      }
  > {}

  declare export class CheckTreePicker extends React$Component<
    PickerProps &
      SelectProps & {
        appearance?: PickerAppearanceType,
        data: Array<any>,
        value?: Array<any>,
        height?: number,
        inline?: boolean,
        cascade?: boolean,
        expandAll?: boolean,
        searchable?: boolean,
        childrenKey?: string,
        defaultValue?: Array<any>,
        searchKeyword?: string,
        defaultExpandAll?: boolean,
        disabledItemValues?: Array<any>,
        disabledCheckboxValues?: Array<any>,
        onSearch?: (searchKeyword: string, event: SyntheticEvent<*>) => void,
        onChange?: (values: any) => void,
        onExpand?: (activeNode: any, labyer: number) => void,
        onSelect?: (activeNode: any, layer: number, values: any) => void,
        onScroll?: (event: SyntheticEvent<*>) => void,
        renderValue?: (
          values: Array<any>,
          checkItems: Array<any>,
          placeholder: string | React$Node
        ) => React$Node,
        renderTreeNode?: (nodeData: Object) => React$Node,
        renderTreeIcon?: (nodeData: Object) => React$Node,
        renderExtraFooter?: () => React$Node
      }
  > {}

  declare export class TreePicker extends React$Component<
    PickerProps &
      SelectProps & {
        appearance?: PickerAppearanceType,
        data: Array<any>,
        open?: boolean,
        value?: any,
        height?: number,
        inline?: boolean,
        expandAll?: boolean,
        searchable?: boolean,
        childrenKey?: string,
        defaultValue?: any,
        searchKeyword?: string,
        defaultExpandAll?: boolean,
        disabledItemValues?: Array<any>,
        onSearch?: (searchKeyword: string, event: SyntheticEvent<*>) => void,
        onChange?: (value: any) => void,
        onExpand?: (activeNode: any, labyer: number) => void,
        onSelect?: (
          activeNode: any,
          layer: number,
          event: SyntheticEvent<*>
        ) => void,
        renderValue?: (
          activeNode: Object,
          placeholder: string | React$Node
        ) => React$Node,
        renderTreeNode?: (nodeData: Object) => React$Node,
        renderTreeIcon?: (nodeData: Object) => React$Node,
        renderExtraFooter?: () => React$Node
      }
  > {}

  declare export class Tree extends React$Component<{
    data: Array<any>,
    value?: any,
    height?: number,
    expandAll?: boolean,
    valueKey?: string,
    labelKey?: string,
    childrenKey?: string,
    defaultValue?: any,
    defaultExpandAll?: boolean,
    disabledItemValues?: Array<any>,
    onChange?: (value: any) => void,
    onExpand?: (activeNode: any, labyer: number) => void,
    onSelect?: (
      activeNode: any,
      layer: number,
      event: SyntheticEvent<*>
    ) => void,
    renderTreeNode?: (nodeData: Object) => React$Node,
    renderTreeIcon?: (nodeData: Object) => React$Node
  }> {}

  declare export class CheckTree extends React$Component<{
    data: Array<any>,
    value?: any,
    height?: number,
    expandAll?: boolean,
    valueKey?: string,
    labelKey?: string,
    childrenKey?: string,
    defaultValue?: any,
    defaultExpandAll?: boolean,
    disabledItemValues?: Array<any>,
    onChange?: (value: Array<any>) => void,
    onExpand?: (activeNode: any, labyer: number) => void,
    onSelect?: (
      activeNode: any,
      layer: number,
      event: SyntheticEvent<*>
    ) => void,
    renderTreeNode?: (nodeData: Object) => React$Node,
    renderTreeIcon?: (nodeData: Object) => React$Node
  }> {}

  declare export class CheckPicker extends React$Component<
    PickerProps &
      SelectProps & {
        appearance?: PickerAppearanceType,
        data: Array<any>,
        disabledItemValues?: Array<any>,
        maxHeight?: number,
        value?: Array<any>,
        defaultValue?: Array<any>,
        renderMenuItem?: (itemLabel: React$Node, item: Object) => React$Node,
        renderMenuGroup?: (title: React$Node, item: Object) => React$Node,
        renderValue?: (value: Array<any>, items: Array<any>) => React$Node,
        renderExtraFooter?: () => React$Node,
        onChange?: (value: Array<any>, event: SyntheticEvent<*>) => void,
        onSelect?: (value: any, item: Object, event: SyntheticEvent<*>) => void,
        onGroupTitleClick?: (event: SyntheticEvent<*>) => void,
        onSearch?: (searchKeyword: string, event: SyntheticEvent<*>) => void,
        groupBy?: any,
        searchable?: boolean
      }
  > {}

  declare export class DatePicker extends React$Component<
    PickerProps & {
      appearance?: PickerAppearanceType,
      disabledDate?: (date?: moment$Moment) => boolean,
      disabledHours?: (hour: number, date: moment$Moment) => boolean,
      disabledMinutes?: (minute: number, date: moment$Moment) => boolean,
      disabledSeconds?: (second: number, date: moment$Moment) => boolean,
      hideHours?: (hour: number, date: moment$Moment) => boolean,
      hideMinutes?: (minute: number, date: moment$Moment) => boolean,
      hideSeconds?: (second: number, date: moment$Moment) => boolean,
      ranges?: Array<Range>,
      defaultValue?: moment$Moment,
      value?: moment$Moment,
      calendarDefaultDate?: moment$Moment,
      format?: string,
      inline?: boolean,
      onChange?: (value: moment$Moment | null) => void,
      onChangeCalendarDate?: (
        date: moment$Moment,
        event?: SyntheticEvent<*>
      ) => void,
      onToggleMonthDropdown?: (toggle: boolean) => void,
      onToggleTimeDropdown?: (toggle: boolean) => void,
      onSelect?: (date: moment$Moment, event?: SyntheticEvent<*>) => void,
      onPrevMonth?: (date: moment$Moment) => void,
      onNextMonth?: (date: moment$Moment) => void,
      onOk?: (date: moment$Moment, event: SyntheticEvent<*>) => void,
      isoWeek?: boolean,
      limitStartYear?: number,
      limitEndYear?: number,
      menuClassName?: string
    }
  > {}

  declare export class DateRangePicker extends React$Component<
    PickerProps & {
      appearance?: PickerAppearanceType,
      disabledDate?: (
        date: moment$Moment,
        selectValue: Array<moment$Moment | null>,
        doneSelected: boolean,
        type: string
      ) => boolean,
      ranges?: Array<Range>,
      value?: Array<moment$Moment>,
      defaultValue?: Array<moment$Moment>,
      format?: string,
      onChange?: (value: Array<moment$Moment>) => void,
      onOk?: (value?: Array<moment$Moment>, event: SyntheticEvent<*>) => void,
      hoverRange?: "week" | "month" | (() => void),
      isoWeek?: boolean,
      oneTap?: boolean,
      limitStartYear?: number,
      limitEndYear?: number,
      menuClassName?: string,
      onSelect?: (date: moment$Moment) => void
    }
  > {}

  declare export class InputPicker extends React$Component<
    PickerProps &
      SelectProps & {
        data: Array<any>,
        cacheData?: Array<any>,
        disabledItemValues?: Array<any>,
        maxHeight?: number,
        value?: any,
        defaultValue?: any,
        renderMenuItem?: (itemLabel: React$Node, item: Object) => React$Node,
        renderMenuGroup?: (title: React$Node, item: Object) => React$Node,
        renderValue?: (value: any, item: Object) => React$Node,
        renderExtraFooter?: () => React$Node,
        onChange?: (value: any, event: SyntheticEvent<*>) => void,
        onSelect?: (value: any, item: Object, event: SyntheticEvent<*>) => void,
        onGroupTitleClick?: (event: SyntheticEvent<*>) => void,
        onSearch?: (searchKeyword: string, event: SyntheticEvent<*>) => void,
        groupBy?: any,
        searchable?: boolean,
        creatable?: boolean
      }
  > {}

  declare export class TagPicker extends React$Component<
    PickerProps &
      SelectProps & {
        data: Array<any>,
        cacheData?: Array<any>,
        disabledItemValues?: Array<any>,
        maxHeight?: number,
        value?: Array<any>,
        defaultValue?: Array<any>,
        renderMenuItem?: (itemLabel: React$Node, item: Object) => React$Node,
        renderMenuGroup?: (title: React$Node, item: Object) => React$Node,
        renderValue?: (value: Array<any>, item: Object) => React$Node,
        renderExtraFooter?: () => React$Node,
        onChange?: (value: Array<any>, event: SyntheticEvent<*>) => void,
        onSelect?: (
          value: Array<any>,
          item: Object,
          event: SyntheticEvent<*>
        ) => void,
        onGroupTitleClick?: (event: SyntheticEvent<*>) => void,
        onSearch?: (searchKeyword: string, event: SyntheticEvent<*>) => void,
        groupBy?: any,
        searchable?: boolean,
        creatable?: boolean
      }
  > {}

  declare export class SelectPicker extends React$Component<
    PickerProps &
      SelectProps & {
        appearance?: PickerAppearanceType,
        data: Array<any>,
        disabledItemValues?: Array<any>,
        maxHeight?: number,
        value?: any,
        defaultValue?: any,
        renderMenuItem?: (itemLabel: React$Node, item: Object) => React$Node,
        renderMenuGroup?: (title: React$Node, item: Object) => React$Node,
        renderValue?: (value: any, item: Object) => React$Node,
        renderExtraFooter?: () => React$Node,
        onChange?: (value: any, event: SyntheticEvent<*>) => void,
        onSelect?: (value: any, item: Object, event: SyntheticEvent<*>) => void,
        onGroupTitleClick?: (event: SyntheticEvent<*>) => void,
        onSearch?: (searchKeyword: string, event: SyntheticEvent<*>) => void,
        groupBy?: any,
        searchable?: boolean
      }
  > {}

  declare export class AutoComplete extends React$Component<{
    data: Array<string | ItemDataType>,
    disabled?: boolean,
    onSelect?: (item: ItemDataType, event: SyntheticEvent<*>) => void,
    onChange?: (value: string, event: SyntheticEvent<*>) => void,
    classPrefix?: string,
    value?: string,
    defaultValue?: string,
    className?: string,
    menuClassName?: string,
    placement?: Placement,
    onFocus?: (event: SyntheticEvent<*>) => void,
    onMenuFocus?: (focusItemValue: any, event: SyntheticEvent<*>) => void,
    onBlur?: (event: SyntheticEvent<*>) => void,
    onKeyDown?: (event: SyntheticEvent<*>) => void,
    onOpen?: () => void,
    onClose?: () => void,
    renderItem?: (itemValue: string) => React$Node,
    style?: Object,
    open?: boolean,
    selectOnEnter?: boolean
  }> {}

  declare export class BreadcrumbItem extends React$Component<{
    active?: boolean,
    className?: string,
    style?: Object,
    href?: string,
    title?: React$ElementType,
    target?: string,
    classPrefix?: string,
    componentClass?: React$ElementType
  }> {}

  declare export class Breadcrumb extends React$Component<{
    separator?: React$Node,
    componentClass?: React$ElementType,
    children?: React$Node,
    className?: string,
    classPrefix?: string
  }> {
    static Item: Class<BreadcrumbItem>;
  }

  declare export class Button extends React$Component<{
    appearance?: "default" | "primary" | "link" | "subtle" | "ghost",
    classPrefix?: string,
    componentClass?: React$ElementType,
    className?: string,
    active?: boolean,
    block?: boolean,
    href?: string,
    loading?: boolean,
    disabled?: boolean,
    children?: React$Node
  }> {}

  declare export class ButtonGroup extends React$Component<{
    className?: string,
    vertical?: boolean,
    justified?: boolean,
    block?: boolean,
    classPrefix?: string,
    children?: React$Element<typeof Button>
  }> {}

  declare export class ButtonToolbar extends React$Component<{
    className?: string,
    classPrefix?: string
  }> {}

  declare export class Checkbox extends React$Component<{
    title?: string,
    className?: string,
    inline?: boolean,
    disabled?: boolean,
    checked?: boolean,
    defaultChecked?: boolean,
    indeterminate?: boolean,
    onChange?: (
      value: any,
      checked: boolean,
      event: SyntheticInputEvent<HTMLInputElement>
    ) => void,
    onClick?: (event: SyntheticEvent<*>) => void,
    inputRef?: React$ElementRef<*>,
    value?: any,
    children?: React$Node,
    classPrefix?: string,
    tabIndex?: number
  }> {}

  declare export class CheckboxGroup extends React$Component<{
    name?: string,
    className?: string,
    inline?: boolean,
    value?: Array<any>,
    defaultValue?: Array<any>,
    onChange?: (
      value: Array<any>,
      event: SyntheticInputEvent<HTMLInputElement>
    ) => void,
    classPrefix?: string
  }> {}

  declare export class Col extends React$Component<{
    className?: string,
    classPrefix?: string,
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xsOffset?: number,
    smOffset?: number,
    mdOffset?: number,
    lgOffset?: number,
    xsPush?: number,
    smPush?: number,
    mdPush?: number,
    lgPush?: number,
    xsPull?: number,
    smPull?: number,
    mdPull?: number,
    lgPull?: number,
    xsHidden?: boolean,
    smHidden?: boolean,
    mdHidden?: boolean,
    lgHidden?: boolean,
    componentClass?: React$ElementType
  }> {}

  declare export class Container extends React$Component<{
    className?: string,
    classPrefix?: string
  }> {}

  declare export class Content extends React$Component<{
    className?: string,
    classPrefix?: string
  }> {}

  declare export class ControlLabel extends React$Component<{
    className?: string,
    htmlFor?: string,
    classPrefix?: string,
    srOnly?: boolean
  }> {}

  declare export class Divider extends React$Component<{
    className?: string,
    vertical?: boolean,
    classPrefix?: string,
    children?: React$Node,
    componentClass?: React$ElementType
  }> {}

  declare export class Drawer extends React$Component<{
    classPrefix?: string,
    placement?: "top" | "right" | "bottom" | "left",
    show?: boolean,
    full?: boolean,
    children?: React$Node,
    className?: string
  }> {
    static Body: Class<ModalBody>;
    static Header: Class<ModalHeader>;
    static Title: Class<ModalTitle>;
    static Footer: Class<ModalFooter>;
    static Dialog: Class<ModalDialog>;
  }

  declare export class Dropdown extends React$Component<{
    activeKey?: any,
    classPrefix?: string,
    trigger?: DropdownTriggerType | Array<DropdownTriggerType>,
    placement?: PlacementEightPoints,
    title?: React$Node,
    disabled?: boolean,
    icon?: React$Element<typeof Icon>,
    onClose?: () => void,
    onOpen?: () => void,
    onToggle?: (open?: boolean) => void,
    onSelect?: (eventKey: any, event: SyntheticEvent<*>) => void,
    onMouseEnter?: (event: SyntheticEvent<*>) => void,
    onMouseLeave?: (event: SyntheticEvent<*>) => void,
    onContextMenu?: (event: SyntheticEvent<*>) => void,
    onClick?: (event: SyntheticEvent<*>) => void,
    menuStyle?: Object,
    className?: string,
    toggleClassName?: string,
    renderTitle?: (children?: React$Node) => React$Node,
    tabIndex?: number,
    open?: boolean,
    eventKey?: any,
    componentClass?: React$ElementType,
    toggleComponentClass?: React$ElementType,
    noCaret?: boolean
  }> {
    static Item: Class<DropdownMenuItem>;
    static Menu: Class<DropdownMenu>;
  }

  declare export class DropdownMenu extends React$Component<{
    activeKey?: any,
    className?: string,
    icon?: React$Element<typeof Icon>,
    classPrefix?: string,
    pullLeft?: boolean,
    onSelect?: Function,
    title?: React$Node,
    open?: boolean,
    trigger?: TriggerType | Array<TriggerType>,
    eventKey?: any,
    onToggle?: (eventKey: any, event: SyntheticEvent<*>) => void,
    openKeys?: Array<any>,
    expanded?: boolean,
    collapsible?: boolean
  }> {}

  declare export class DropdownMenuItem extends React$Component<{
    activeKey?: any,
    className?: string,
    children?: React$Node,
    icon?: React$Element<typeof Icon>,
    classPrefix?: string,
    pullLeft?: boolean,
    onSelect?: Function,
    title?: React$Node,
    open?: boolean,
    trigger?: TriggerType | Array<TriggerType>,
    eventKey?: any,
    onToggle?: (eventKey: any, event: SyntheticEvent<*>) => void,
    openKeys?: Array<any>,
    expanded?: boolean,
    collapsible?: boolean
  }> {}

  declare export class DorpdownToggle extends React$Component<{
    className?: string,
    children?: React$Node,
    icon?: React$Element<typeof Icon>,
    renderTitle?: (children?: React$Node) => React$Node,
    classPrefix?: string,
    noCaret?: boolean,
    componentClass?: React$ElementType
  }> {}

  declare export class ErrorMessage extends React$Component<{
    htmlFor?: string,
    show?: boolean,
    classPrefix?: string,
    children?: React$Node,
    className?: string,
    placement?: PlacementEightPoints
  }> {}

  declare export class FlexboxGrid extends React$Component<{
    className?: string,
    align?: "top" | "middle" | "bottom",
    justify?: "start" | "end" | "center" | "space-around" | "space-between",
    classPrefix?: string
  }> {
    static Item: Class<FlexboxGridItem>;
  }

  declare export class FlexboxGridItem extends React$Component<{
    className?: string,
    colspan?: number,
    order?: number,
    classPrefix?: string
  }> {}

  declare export class Footer extends React$Component<{
    className?: string,
    classPrefix?: string
  }> {}

  declare export class Form extends React$Component<{
    className?: string,
    layout?: "horizontal" | "vertical" | "inline",
    fluid?: boolean,
    formValue?: Object,
    formDefaultValue?: Object,
    formError?: Object,
    checkDelay?: number,
    checkTrigger?: "change" | "blur" | "none",
    onChange?: (formValue: Object, event: SyntheticEvent<*>) => void,
    onError?: (formError: Object) => void,
    onCheck?: (formError: Object) => void,
    model?: typeof Schema,
    classPrefix?: string
  }> {}

  declare export class Icon extends React$Component<{
    icon: string | SVGIcon,
    className?: string,
    classPrefix?: string,
    componentClass?: React$ElementType,
    size?: "lg" | "2x" | "3x" | "4x" | "5x",
    flip?: "horizontal" | "vertical",
    stack?: "1x" | "2x",
    rotate?: number,
    fixedWidth?: boolean,
    svgStyle?: Object,
    spin?: boolean,
    pulse?: boolean
  }> {}

  declare export class IntlProvider extends React$Component<{
    locale?: Object,
    children?: React$Node
  }> {}

  declare export class FormControl extends React$Component<{
    name: string,
    checkTrigger?: "change" | "blur" | "none",
    accepter?: React$ElementType,
    onChange?: (value: any, event: SyntheticEvent<*>) => void,
    onBlur?: (event: SyntheticEvent<*>) => void,
    classPrefix?: string,
    errorMessage?: React$Node,
    errorPlacement?: PlacementEightPoints
  }> {}

  declare export class FormGroup extends React$Component<{
    controlId?: string,
    isValid?: boolean,
    className?: string,
    classPrefix?: string,
    validationState?: "success" | "warning" | "error"
  }> {}

  declare export class Grid extends React$Component<{
    className?: string,
    fluid?: boolean,
    classPrefix?: string,
    componentClass?: React$ElementType
  }> {}

  declare export class Header extends React$Component<{
    className?: string,
    classPrefix?: string
  }> {}

  declare export class HelpBlock extends React$Component<{
    className?: string,
    htmlFor?: string,
    tooltip?: boolean,
    classPrefix?: string
  }> {}

  declare export class IconButton extends React$Component<{
    className?: string,
    icon?: React$Element<typeof Icon>,
    classPrefix?: string,
    circle?: boolean,
    children?: React$Node,
    placement?: "left" | "right"
  }> {}

  declare export class Input extends React$Component<{
    type?: string,
    componentClass?: React$ElementType,
    id?: string,
    classPrefix?: string,
    className?: string,
    disabled?: boolean,
    value?: string | number,
    defaultValue?: string | number,
    inputRef?: React$ElementRef<*>,
    onChange?: (
      value: any,
      event: SyntheticInputEvent<HTMLInputElement>
    ) => void,
    onFocus?: (event: SyntheticEvent<*>) => void,
    onBlur?: (event: SyntheticEvent<*>) => void,
    onKeyDown?: (event: SyntheticEvent<*>) => void,
    onPressEnter?: (event: SyntheticEvent<*>) => void
  }> {}

  declare export class InputGroup extends React$Component<{
    className?: string,
    classPrefix?: string,
    inside?: boolean,
    disabled?: boolean
  }> {
    static Addon: Class<InputGroupAddon>;
    static Button: Class<InputGroupButton>;
  }

  declare export class InputGroupAddon extends React$Component<{
    className?: string,
    classPrefix?: string,
    disabled?: boolean
  }> {}

  declare export class InputGroupButton extends React$Component<{
    className?: string,
    classPrefix?: string
  }> {}

  declare export class InputNumber extends React$Component<{
    className?: string,
    classPrefix?: string,
    min?: number,
    max?: number,
    step?: number,
    value?: number | string,
    defaultValue?: number | string,
    prefix?: React$Node,
    postfix?: React$Node,
    disabled?: boolean,
    size?: "lg" | "md" | "sm" | "xs",
    onWheel?: (event?: SyntheticEvent<*>) => void,
    onChange?: (value: any, event?: SyntheticEvent<*>) => void,
    buttonAppearance?: "default" | "primary" | "link" | "subtle" | "ghost"
  }> {}

  declare export class Loader extends React$Component<{
    className?: string,
    classPrefix?: string,
    center?: boolean,
    backdrop?: boolean,
    inverse?: boolean,
    vertical?: boolean,
    content?: React$Node,
    speed?: "normal" | "fast" | "slow"
  }> {}

  declare export class Message extends React$Component<{
    type?: Types,
    className?: string,
    onClose?: () => void,
    closable?: boolean,
    closeLabel?: string,
    title?: React$Node,
    description?: React$Node,
    showIcon?: boolean,
    full?: boolean,
    classPrefix?: string
  }> {}

  declare export class Modal extends React$Component<{
    classPrefix?: string,
    size?: Size,
    container?: React$ElementType | Function,
    onRendered?: Function,
    className?: string,
    dialogClassName?: string,
    backdropClassName?: string,
    style?: Object,
    dialogStyle?: Object,
    backdropStyle?: Object,
    show?: boolean,
    full?: boolean,
    backdrop?: boolean | "static",
    keyboard?: boolean,
    transition?: React$ElementType,
    dialogTransitionTimeout?: number,
    backdropTransitionTimeout?: number,
    autoFocus?: boolean,
    enforceFocus?: boolean,
    overflow?: boolean,
    drawer?: boolean,
    animation?: boolean,
    dialogComponentClass?: React$ElementType,
    onEscapeKeyUp?: Function,
    onBackdropClick?: Function,
    onShow?: Function,
    onHide?: Function,
    onEnter?: Function,
    onEntering?: Function,
    onEntered?: Function,
    onExit?: Function,
    onExiting?: Function,
    onExited?: Function
  }> {
    static Body: Class<ModalBody>;
    static Header: Class<ModalHeader>;
    static Title: Class<ModalTitle>;
    static Footer: Class<ModalFooter>;
    static Dialog: Class<ModalDialog>;
  }

  declare export class ModalBody extends React$Component<{
    classPrefix?: string,
    className?: string
  }> {}

  declare export class ModalDialog extends React$Component<{
    className?: string,
    classPrefix?: string,
    dialogClassName?: string,
    style?: Object,
    dialogStyle?: Object
  }> {}

  declare export class ModalFooter extends React$Component<{
    classPrefix?: string,
    className?: string
  }> {}

  declare export class ModalHeader extends React$Component<{
    classPrefix?: string,
    className?: string,
    closeButton?: boolean,
    onHide?: Function
  }> {}

  declare export class ModalTitle extends React$Component<{
    className?: string,
    classPrefix?: string
  }> {}

  declare export class Nav extends React$Component<{
    classPrefix?: string,
    className?: string,
    appearance?: "default" | "subtle" | "tabs",
    reversed?: boolean,
    justified?: boolean,
    vertical?: boolean,
    pullRight?: boolean,
    activeKey?: any,
    onSelect?: (eventKey: any, event: SyntheticEvent<*>) => void
  }> {
    static Item: Class<NavItem>;
  }

  declare export class NavItem extends React$Component<{
    active?: boolean,
    disabled?: boolean,
    className?: string,
    classPrefix?: string,
    divider?: boolean,
    panel?: boolean,
    onClick?: (event: SyntheticEvent<*>) => void,
    style?: Object,
    icon?: React$Element<typeof Icon>,
    onSelect?: (eventKey: any, event: SyntheticEvent<*>) => void,
    eventKey?: any,
    tabIndex?: number,
    hasTooltip?: boolean,
    componentClass?: React$ElementType
  }> {}

  declare export class Navbar extends React$Component<{
    classPrefix?: string,
    className?: string,
    appearance?: "default" | "inverse" | "subtle",
    componentClass?: React$ElementType,
    hasChildContext?: boolean
  }> {
    static Body: Class<NavbarBody>;
    static Header: Class<NavbarHeader>;
  }

  declare export class NavbarBody extends React$Component<{
    classPrefix?: string,
    className?: string,
    children?: React$Node
  }> {}

  declare export class NavbarHeader extends React$Component<{
    classPrefix?: string,
    className?: string
  }> {}

  declare export class Pagination extends React$Component<{
    activePage?: number,
    pages?: number,
    maxButtons?: number,
    boundaryLinks?: boolean,
    ellipsis?: boolean | React$Node,
    first?: boolean | React$Node,
    last?: boolean | React$Node,
    prev?: boolean | React$Node,
    next?: boolean | React$Node,
    onSelect?: (event: SyntheticEvent<*>) => void,
    buttonComponentClass?: React$ElementType | string,
    className?: string,
    classPrefix?: string
  }> {}

  declare export class Panel extends React$Component<{
    collapsible?: boolean,
    bordered?: boolean,
    bodyFill?: boolean,
    header?: any,
    id?: string | number,
    defaultExpanded?: boolean,
    expanded?: boolean,
    eventKey?: any,
    headerRole?: string,
    panelRole?: string,
    classPrefix?: string,
    children?: React$Node,
    onSelect?: (eventKey: any, event: SyntheticEvent<*>) => void,
    onEnter?: Function,
    onEntering?: Function,
    onEntered?: Function,
    onExit?: Function,
    onExiting?: Function,
    onExited?: Function,
    className?: string
  }> {}

  declare export class PanelGroup extends React$Component<{
    accordion?: boolean,
    activeKey?: any,
    bordered?: boolean,
    defaultActiveKey?: any,
    className?: string,
    children?: React$Node,
    classPrefix?: string,
    onSelect?: (eventKey: any, event: SyntheticEvent<*>) => void
  }> {}

  declare export class Popover extends React$Component<{
    placement?: PlacementFourSides | Placement,
    classPrefix?: string,
    children?: React$Node,
    title?: React$Node,
    visible?: boolean,
    className?: string,
    full?: boolean,
    onMouseLeave?: (event: SyntheticEvent<*>) => void,
    onMouseEnter?: (event: SyntheticEvent<*>) => void
  }> {}

  declare export class ProgressCircle extends React$Component<{
    className?: string,
    strokeColor?: string,
    strokeLinecap?: "butt" | "round" | "square",
    trailColor?: string,
    percent?: number,
    strokeWidth?: number,
    trailWidth?: number,
    gapDegree?: number,
    gapPosition?: "top" | "bottom" | "left" | "right",
    showInfo?: boolean,
    status?: "success" | "fail" | "active",
    classPrefix?: string
  }> {}

  declare export class ProgressLine extends React$Component<{
    className?: string,
    classPrefix?: string,
    percent?: number,
    strokeColor?: string,
    strokeWidth?: number,
    trailColor?: string,
    trailWidth?: number,
    showInfo?: boolean,
    status?: "success" | "fail" | "active"
  }> {}

  declare export class Radio extends React$Component<{
    id?: string,
    name?: string,
    inline?: boolean,
    title?: string,
    disabled?: boolean,
    checked?: boolean,
    defaultChecked?: boolean,
    inputRef?: React$ElementRef<any>,
    children?: React$Node,
    className?: string,
    classPrefix?: string,
    value?: any,
    onChange?: (
      value: any,
      checked: boolean,
      event: SyntheticInputEvent<HTMLInputElement>
    ) => void,
    onClick?: (event: SyntheticEvent<*>) => void,
    tabIndex?: number
  }> {}

  declare export class RadioGroup extends React$Component<{
    name?: string,
    inline?: boolean,
    value?: any,
    defaultValue?: any,
    className?: string,
    classPrefix?: string,
    children?: React$Node,
    onChange?: (
      value: any,
      event: SyntheticInputEvent<HTMLInputElement>
    ) => void
  }> {}

  declare export class Row extends React$Component<{
    className?: string,
    classPrefix?: string,
    gutter?: number,
    style?: Object,
    componentClass?: React$ElementType,
    children?: React$Node
  }> {}

  declare export class SafeAnchor extends React$Component<{
    href?: string,
    onClick?: (event: SyntheticEvent<*>) => void,
    disabled?: boolean,
    role?: string,
    style?: Object,
    tabIndex?: number | string,
    componentClass?: React$ElementType
  }> {}

  declare export class Sidebar extends React$Component<{
    className?: string,
    classPrefix?: string,
    width?: number | string,
    collapsible?: boolean
  }> {}

  declare export class Sidenav extends React$Component<{
    classPrefix?: string,
    className?: string,
    expanded?: boolean,
    appearance?: "default" | "inverse" | "subtle",
    defaultOpenKeys?: Array<any>,
    openKeys?: Array<any>,
    onOpenChange?: (openKeys: Array<any>, event: SyntheticEvent<*>) => void,
    activeKey?: any,
    onSelect?: (eventKey: Array<any>, event: SyntheticEvent<*>) => void,
    componentClass?: React$ElementType
  }> {
    static Header: Class<SidenavHeader>;
    static Body: Class<SidenavBody>;
    static Toggle: Class<SidenavToggle>;
  }

  declare export class SidenavBody extends React$Component<{
    classPrefix?: string,
    className?: string
  }> {}

  declare export class SidenavHeader extends React$Component<{
    classPrefix?: string,
    className?: string
  }> {}

  declare export class SidenavToggle extends React$Component<{
    classPrefix?: string,
    className?: string
  }> {}

  declare export class Slider extends React$Component<{
    min?: number,
    max?: number,
    step?: number,
    value?: number,
    defaultValue?: number,
    className?: string,
    classPrefix?: string,
    handleClassName?: string,
    handleTitle?: React$Node,
    barClassName?: string,
    hanldeStyle?: Object,
    disabled?: boolean,
    graduated?: boolean,
    tooltip?: boolean,
    progress?: boolean,
    vertical?: boolean,
    onChange?: (value: number) => void,
    renderMark?: (mark: number) => React$Node
  }> {}

  declare export class StepItem extends React$Component<{
    className?: string,
    classPrefix?: string,
    itemWidth?: number | string,
    status?: "finish" | "wait" | "process" | "error",
    icon?: React$Element<typeof Icon>,
    stepNumber?: number,
    description?: React$Node,
    title?: React$Node
  }> {}

  declare export class Steps extends React$Component<{
    classPrefix?: string,
    vertical?: boolean,
    small?: boolean,
    className?: string,
    current?: number,
    currentStatus?: "finish" | "wait" | "process" | "error"
  }> {
    static Item: Class<StepItem>;
  }

  declare export class TableColumn extends React$Component<{
    align?: "left" | "center" | "right",
    width?: number,
    fixed?: boolean,
    resizable?: boolean,
    sortable?: boolean,
    flexGrow?: number,
    minWidth?: number,
    colSpan?: number
  }> {}

  declare export class TableCell extends React$Component<{
    align?: "left" | "center" | "right",
    className?: string,
    classPrefix?: string,
    dataKey?: string,
    isHeaderCell?: boolean,
    width?: number,
    height?: number,
    left?: number,
    headerHeight?: number,
    style?: Object,
    firstColumn?: boolean,
    lastColumn?: boolean,
    hasChildren?: boolean,
    children?: React$Node,
    rowKey?: string | number,
    rowIndex?: number,
    rowData?: Object,
    layer?: number,
    onTreeToggle?: (
      rowKey?: string | number,
      rowIndex?: number,
      rowData?: Object,
      event?: SyntheticEvent<*>
    ) => void,
    renderTreeToggle?: (
      expandButton: React$Node,
      rowData?: Object
    ) => React$Node,
    renderCell?: (contentChildren: React$Node) => React$Node,
    wordWrap?: boolean,
    removed?: boolean
  }> {}

  declare export class TableHeaderCell extends React$Component<{
    width?: number,
    dataKey?: string,
    left?: number,
    className?: string,
    classPrefix?: string,
    headerHeight?: number,
    children?: React$Node,
    index?: number,
    sortColumn?: string,
    sortType?: "desc" | "asc",
    sortable?: boolean,
    resizable?: boolean,
    onColumnResizeStart?: (
      columnWidth?: number,
      left?: number,
      fixed?: boolean
    ) => void,
    onColumnResizeEnd?: (
      columnWidth?: number,
      cursorDelta?: number,
      dataKey?: any,
      index?: number
    ) => void,
    onColumnResizeMove?: (
      columnWidth?: number,
      columnLeft?: number,
      columnFixed?: boolean
    ) => void,
    onSortColumn?: Function,
    flexGrow?: number,
    fixed?: boolean
  }> {}

  declare export class TablePagination extends React$Component<{
    lengthMenu?: Array<{ value: number, label: React$Node }>,
    showLengthMenu?: boolean,
    showInfo?: boolean,
    total: number,
    displayLength?: number,
    renderLengthMenu?: (picker: React$Node) => React$Node,
    renderTotal?: Function,
    onChangePage?: Function,
    onChangeLength?: Function,
    prev?: boolean,
    next?: boolean,
    first?: boolean,
    last?: boolean,
    maxButtons?: number,
    activePage?: number,
    className?: string,
    classPrefix?: string
  }> {}

  declare export class Table extends React$Component<{
    data: Array<Object>,
    width?: number,
    height?: number,
    autoHeight?: boolean,
    minHeight?: number,
    rowHeight?: number,
    headerHeight?: number,
    setRowHeight?: (rowData: Object) => number,
    rowKey?: string | number,
    isTree?: boolean,
    defaultExpandAllRows?: boolean,
    defaultExpandedRowKeys?: Array<string | number>,
    expandedRowKeys?: Array<string | number>,
    renderTreeToggle?: (
      expandButton: React$Node,
      rowData: Object
    ) => React$Node,
    renderRowExpanded?: (rowDate?: Object) => React$Node,
    rowExpandedHeight?: number,
    style?: Object,
    sortColumn?: string,
    sortType?: "desc" | "asc",
    disabledScroll?: boolean,
    hover?: boolean,
    loading?: boolean,
    className?: string,
    classPrefix?: string,
    children?: mixed,
    bordered?: boolean,
    cellBordered?: boolean,
    wordWrap?: boolean,
    onRowClick?: (rowData: Object) => void,
    onScroll?: (scrollX: number, scrollY: number) => void,
    onSortColumn?: (dataKey: string, sortType: "desc" | "asc") => void,
    onExpandChange?: (expanded: boolean, rowData: Object) => void,
    onTouchStart?: (event: SyntheticTouchEvent<*>) => void, // for tests
    onTouchMove?: (event: SyntheticTouchEvent<*>) => void, // for tests
    bodyRef?: React$ElementRef<*>,
    loadAnimation?: boolean,
    showHeader?: boolean
  }> {
    static Column: Class<TableColumn>;
    static Cell: Class<TableCell>;
    static HeaderCell: Class<TableHeaderCell>;
    static Pagination: Class<TablePagination>;
  }

  declare export class Tag extends React$Component<{
    closable?: boolean,
    classPrefix?: string,
    onClose?: (event: SyntheticEvent<*>) => void,
    children?: React$Node,
    className?: string,
    componentClass?: React$ElementType
  }> {}

  declare export class Timeline extends React$Component<{
    className?: string,
    classPrefix?: string,
    children?: React$Node,
    componentClass?: React$ElementType
  }> {
    static Item: Class<TimelineItem>;
  }

  declare export class TimelineItem extends React$Component<{
    last?: boolean,
    dot?: React$Node,
    className?: string,
    children?: React$Node,
    classPrefix?: string,
    componentClass?: React$ElementType
  }> {}

  declare export class Toggle extends React$Component<{
    disabled?: boolean,
    checked?: boolean,
    defaultChecked?: boolean,
    onChange?: (checked: boolean, event: SyntheticEvent<*>) => void,
    checkedChildren?: React$Node,
    unCheckedChildren?: React$Node,
    classPrefix?: string,
    className?: string
  }> {}

  declare export class Tooltip extends React$Component<{
    placement?: PlacementFourSides | Placement,
    positionLeft?: number,
    positionTop?: number,
    visible?: boolean,
    classPrefix?: string,
    className?: string,
    children?: React$Node,
    onMouseLeave?: (event: SyntheticEvent<*>) => void,
    onMouseEnter?: (event: SyntheticEvent<*>) => void
  }> {}

  declare export type FileType = {
    name: string,
    fileKey: number | string,
    // https://developer.mozilla.org/zh-CN/docs/Web/API/File
    blobFile?: File,
    status?: "inited" | "uploading" | "error" | "finished",
    progress?: number
  };

  declare export class Uploader extends React$Component<{
    action: string,
    accept?: string,
    autoUpload?: boolean,
    children?: React$Element<any>,
    className?: string,
    classPrefix?: string,
    defaultFileList?: Array<FileType>,
    fileList?: Array<FileType>,
    data?: Object,
    multiple?: boolean,
    disabled?: boolean,
    disabledFileItem?: boolean,
    name?: string,
    timeout?: number,
    withCredentials?: boolean,
    headers?: Object,
    listType?: "text" | "picture-text" | "picture",
    shouldQueueUpdate?: (
      fileList: Array<FileType>,
      newFile: Array<FileType> | FileType
    ) => boolean,
    shouldUpload?: (file: FileType) => boolean,
    onChange?: (fileList: Array<FileType>) => void,
    onUpload?: (file: FileType) => void,
    onReupload?: (file: FileType) => void,
    onPreview?: (file: FileType, event: SyntheticEvent<*>) => void,
    onError?: (
      status: Object,
      file: FileType,
      event: SyntheticEvent<*>
    ) => void,
    onSuccess?: (
      response: Object,
      file: FileType,
      event: SyntheticEvent<*>
    ) => void,
    onProgress?: (
      percent: number,
      file: FileType,
      event: SyntheticEvent<*>
    ) => void,
    onRemove?: (file: FileType) => void,
    maxPreviewFileSize?: number,
    toggleComponentClass?: React$ElementType
  }> {}

  declare export class Whisper extends React$Component<{
    target?: Function,
    container?: HTMLElement | (() => HTMLElement),
    containerPadding?: number,
    placement?: Placement,
    show?: boolean,
    rootClose?: boolean,
    onHide?: Function,
    transition?: React$ElementType,
    onEnter?: Function,
    onEntering?: Function,
    onEntered?: Function,
    onExit?: Function,
    onExiting?: Function,
    onExited?: Function,
    animation?: React$ElementType | boolean,
    trigger?: WhisperTriggerType | Array<WhisperTriggerType>,
    delay?: number,
    delayShow?: number,
    delayHide?: number,
    defaultOpen?: boolean,
    open?: boolean,
    speaker: React$Element<any>,
    children: React$Node,
    onMouseOver?: (event: SyntheticEvent<*>) => void,
    onMouseOut?: (event: SyntheticEvent<*>) => void,
    onClick?: (event: SyntheticEvent<*>) => void,
    onBlur?: (event: SyntheticEvent<*>) => void,
    onFocus?: (event: SyntheticEvent<*>) => void,
    disabled?: boolean
  }> {}

  declare export var Progress: {
    Line: Class<ProgressLine>,
    Circle: Class<ProgressCircle>
  };

  declare type NotificationConfig = {
    title: React$Node,
    description: React$ElementType,
    duration?: number,
    placement?: string,
    top?: number,
    bottom?: number,
    onClose?: () => void,
    style?: Object,
    key?: string
  };

  declare export var Notification: {
    open: (config: NotificationConfig) => void,
    info: (config: NotificationConfig) => void,
    success: (config: NotificationConfig) => void,
    warning: (config: NotificationConfig) => void,
    error: (config: NotificationConfig) => void,
    remove: (key: string) => void
  };

  declare export var Alert: {
    info: (content: string, duration?: number, onClose?: () => void) => void,
    success: (content: string, duration?: number, onClose?: () => void) => void,
    warning: (content: string, duration?: number, onClose?: () => void) => void,
    error: (content: string, duration?: number, onClose?: () => void) => void,
    config: (options: {
      top?: number,
      duration?: number,
      getContainer?: () => HTMLElement
    }) => void
  };

  declare export class Transition extends React$Component<{
    children?: React$Node,
    className?: string,
    in?: boolean,
    unmountOnExit?: boolean,
    transitionAppear?: boolean,
    timeout?: number,

    exitedClassName?: string,
    exitingClassName?: string,
    enteredClassName?: string,
    enteringClassName?: string,

    onEnter?: (node: null | HTMLElement | Text) => void,
    onEntering?: (node: null | HTMLElement | Text) => void,
    onEntered?: (node: null | HTMLElement | Text) => void,
    onExit?: (node: null | HTMLElement | Text) => void,
    onExiting?: (node: null | HTMLElement | Text) => void,
    onExited?: (node: null | HTMLElement | Text) => void
  }> {}

  declare export class Fade extends React$Component<{
    timeout?: number,
    className?: string,
    in?: boolean
  }> {}

  declare export class Collapse extends React$Component<{
    in?: boolean,
    timeout?: number,
    className?: string,
    onEnter?: (node: null | HTMLElement | Text) => void,
    onEntering?: (node: null | HTMLElement | Text) => void,
    onEntered?: (node: null | HTMLElement | Text) => void,
    onExit?: (node: null | HTMLElement | Text) => void,
    onExiting?: (node: null | HTMLElement | Text) => void,
    onExited?: (node: null | HTMLElement | Text) => void,
    dimension?: "height" | "width" | (() => "height" | "width"),
    getDimensionValue?: (
      dimension: "height" | "width",
      elem: HTMLElement
    ) => number,
    role?: string,
    exitedClassName?: string,
    exitingClassName?: string,
    enteredClassName?: string,
    enteringClassName?: string
  }> {}

  declare export class Portal extends React$Component<{
    container?: HTMLElement | (() => HTMLElement),
    onRendered?: Function,
    children?: React$Node
  }> {}

  declare export var Animation: {
    Transition: Class<Transition>,
    Fade: Class<Fade>,
    Collapse: Class<Collapse>
  };

  declare class SchemaStringType {
    constructor(errorMessage: string): SchemaStringType;
    isRequired(errorMessage: string): SchemaStringType;
    addRule((value: any) => boolean, errorMessage: string): SchemaStringType;
    check(
      value: any
    ): {
      hasError: boolean,
      errorMessage: string
    };
    containsLetter(errorMessage: string): SchemaStringType;
    containsUppercaseLetter(errorMessage: string): SchemaStringType;
    containsLowercaseLetter(errorMessage: string): SchemaStringType;
    containsLetterOnly(errorMessage: string): SchemaStringType;
    containsNumber(errorMessage: string): SchemaStringType;
    isOneOf(strArr: Array<string>, errorMessage: string): SchemaStringType;
    isEmail(errorMessage: string): SchemaStringType;
    isURL(errorMessage: string): SchemaStringType;
    isHex(errorMessage: string): SchemaStringType;
    pattern(regexp: RegExp, errorMessage: string): SchemaStringType;
    rangeLength(
      minLength: number,
      maxLength: number,
      errorMessage: string
    ): SchemaStringType;

    minLength(minLength: number, errorMessage: string): SchemaStringType;
    maxLength(maxLength: number, errorMessage: string): SchemaStringType;
  }

  declare class SchemaNumberType {
    constructor(errorMessage: string): SchemaNumberType;
    isRequired(errorMessage: string): SchemaNumberType;
    addRule((value: any) => boolean, errorMessage: string): SchemaNumberType;
    check(
      value: any
    ): {
      hasError: boolean,
      errorMessage: string
    };
    pattern(regexp: RegExp, errorMessage: string): SchemaNumberType;
    isInteger(errorMessage: string): SchemaNumberType;
    isOneOf(items: Array<number>, errorMessage: string): SchemaNumberType;
    range(
      minLength: number,
      maxLength: number,
      errorMessage: string
    ): SchemaNumberType;
    min(min: number, errorMessage: string): SchemaNumberType;
    max(min: number, errorMessage: string): SchemaNumberType;
  }

  declare class SchemaArrayType {
    constructor(errorMessage: string): SchemaArrayType;
    isRequired(errorMessage: string): SchemaArrayType;
    addRule((value: any) => boolean, errorMessage: string): SchemaArrayType;
    check(
      value: any
    ): {
      hasError: boolean,
      errorMessage: string
    };
    rangeLength(
      minLength: number,
      maxLength: number,
      errorMessage: string
    ): SchemaArrayType;
    minLength(minLength: number, errorMessage: string): SchemaArrayType;
    maxLength(maxLength: number, errorMessage: string): SchemaArrayType;
    unrepeatable(errorMessage: string): SchemaArrayType;
    of(type: any, errorMessage: string): SchemaArrayType;
  }

  declare class SchemaDateType {
    constructor(errorMessage: string): SchemaDateType;
    isRequired(errorMessage: string): SchemaDateType;
    addRule((value: any) => boolean, errorMessage: string): SchemaDateType;
    check(
      value: any
    ): {
      hasError: boolean,
      errorMessage: string
    };
    range(min: Date, max: Date, errorMessage: string): SchemaDateType;
    min(min: Date, errorMessage: string): SchemaDateType;
    max(max: Date, errorMessage: string): SchemaDateType;
  }

  declare class SchemaObjectType {
    constructor(errorMessage: string): SchemaObjectType;
    isRequired(errorMessage: string): SchemaObjectType;
    addRule((value: any) => boolean, errorMessage: string): SchemaObjectType;
    check(
      value: any
    ): {
      hasError: boolean,
      errorMessage: string
    };
    shape(types: Object, errorMessage: string): SchemaObjectType;
  }

  declare class SchemaBooleanType {
    constructor(errorMessage: string): SchemaBooleanType;
    isRequired(errorMessage: string): SchemaBooleanType;
    addRule((value: any) => boolean, errorMessage: string): SchemaBooleanType;
    check(
      value: any
    ): {
      hasError: boolean,
      errorMessage: string
    };
  }

  declare export var Schema: {
    Model: Object,
    Types: {
      StringType: (errorMessage: string) => SchemaStringType,
      NumberType: (errorMessage: string) => SchemaNumberType,
      ArrayType: (errorMessage: string) => SchemaArrayType,
      DateType: (errorMessage: string) => SchemaDateType,
      ObjectType: (errorMessage: string) => SchemaObjectType,
      BooleanType: (errorMessage: string) => SchemaBooleanType
    }
  };

  declare export var DOMHelper: {
    hasClass: (node: HTMLElement, className: string) => boolean,
    addClass: (node: HTMLElement, className: string) => HTMLElement,
    removeClass: (node: HTMLElement, className: string) => HTMLElement,
    toggleClass: (node: HTMLElement, className: string) => HTMLElement,
    getStyle: Function,
    removeStyle: Function,
    addStyle: Function,
    translateDOMPositionXY: (style: Object, x: number, y: number) => Object,
    on: (
      target: HTMLElement,
      eventName: string,
      listener: Function,
      capture?: boolean
    ) => { off: Function },
    off: (
      target: HTMLElement,
      eventName: string,
      listener: Function,
      capture?: boolean
    ) => void,
    activeElement: () => HTMLElement,
    getHeight: (node: HTMLElement, client?: HTMLElement) => number,
    getWidth: (node: HTMLElement, client?: HTMLElement) => number,
    getOffset: (node: HTMLElement) => Object,
    getOffsetParent: (node: HTMLElement) => Object,
    getPosition: (node: HTMLElement, offsetParent?: Object) => Object,
    getWindow: (node: HTMLElement) => String,
    nodeName: (node: HTMLElement) => String,
    ownerDocument: (node: HTMLElement) => Object,
    ownerWindow: (node: HTMLElement) => Object,
    contains: (context: HTMLElement, node: HTMLElement) => boolean,
    scrollLeft: (node: HTMLElement, val?: number) => number | void,
    scrollTop: (node: HTMLElement, val?: number) => number | void,
    DOMMouseMoveTracker: Function
  };
}

declare module "rsuite/lib/IntlProvider/locales/en_GB" {
  declare module.exports: any;
}
declare module "rsuite/lib/IntlProvider/locales/en_GB.js" {
  declare module.exports: $Exports<"rsuite/lib/IntlProvider/locales/en_GB">;
}

declare module "rsuite/lib/IntlProvider/locales/en_US" {
  declare module.exports: any;
}
declare module "rsuite/lib/IntlProvider/locales/en_US.js" {
  declare module.exports: $Exports<"rsuite/lib/IntlProvider/locales/en_US">;
}

declare module "rsuite/lib/IntlProvider/locales/zh_CN" {
  declare module.exports: any;
}
declare module "rsuite/lib/IntlProvider/locales/zh_CN.js" {
  declare module.exports: $Exports<"rsuite/lib/IntlProvider/locales/zh_CN">;
}

declare module "rsuite/lib/IntlProvider/locales/zh_TW" {
  declare module.exports: any;
}
declare module "rsuite/lib/IntlProvider/locales/zh_TW.js" {
  declare module.exports: $Exports<"rsuite/lib/IntlProvider/locales/zh_TW">;
}
