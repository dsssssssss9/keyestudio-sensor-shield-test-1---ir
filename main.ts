/**
 * Test IR Remote Control & Output numerical key code to LCD 2004 display
 * 
 * IR Receiver is connected to pin 3
 * 
 * LCD 2004 display connected to I2C pins
 * 
 * Uses following Extension....
 * 
 * https://github.com/1010Technologies/pxt-makerbit-lcd2004
 */
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    makerbit.showStringOnLcd2004("                    ", makerbit.position2004(LcdPosition2004.Pos61), 20)
    makerbit.showStringOnLcd2004("" + (makerbit.irButton()), makerbit.position2004(LcdPosition2004.Pos69), 20)
})
makerbit.connectLcd(39)
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.NEC)
makerbit.clearLcd2004()
makerbit.showStringOnLcd2004("IR Remote Control", makerbit.position2004(LcdPosition2004.Pos2), 20)
makerbit.showStringOnLcd2004("Code Display", makerbit.position2004(LcdPosition2004.Pos25), 20)
basic.showIcon(IconNames.Yes)
