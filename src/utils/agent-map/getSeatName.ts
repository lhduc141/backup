import { colorsBase } from 'themes';
import { AGENT_MAP_OBJECT_TYPE } from 'utils/enums';
import * as fabric from 'fabric';
import { FabricCanvasAgentObject } from 'types/fabric-agent-map';

export const getSeatName = (name: string, canvasSeat?: FabricCanvasAgentObject) => {
  let left = 1;
  let top = 18;
  if (canvasSeat) {
    const { left: leftGroup, top: topGroup } = canvasSeat;
    left = leftGroup + 1;
    top = topGroup + 18;
  }

  const seatName = new fabric.Textbox(name, {
    left,
    top,
    width: 82,
    fontSize: 16,
    fontWeight: 600,
    editable: false,
    textAlign: 'center',
    fontFamily: 'inter',
    splitByGrapheme: true,
    fill: colorsBase.mainTextColor,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    selectable: false
  });
  seatName.set({ objectTypeId: AGENT_MAP_OBJECT_TYPE.SEAT_NAME });
  return seatName;
};
