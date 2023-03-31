makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    makerbit.showStringOnLcd2004("                    ", makerbit.position2004(LcdPosition2004.Pos41), 20)
    makerbit.showStringOnLcd2004("" + (makerbit.irButton()), makerbit.position2004(LcdPosition2004.Pos41), 20)
})
makerbit.connectLcd(39)
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.NEC)
makerbit.clearLcd2004()
makerbit.showStringOnLcd2004("Jason IR Tester", makerbit.position2004(LcdPosition2004.Pos1), 20)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
